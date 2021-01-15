import * as jwt from 'jsonwebtoken';
import * as expressValidator from 'express-validator';

import { User } from '../db/schema';
import passport from '../config/passport';
import { errorHandler } from '../db/errors';

function handleResponse(res, code, statusMsg) {
  res.status(code).json(statusMsg);
}

/**
 * POST /login
 * Sign in using email and password.
 */
export const postLogin = async (req, res, next) => {
  await expressValidator
    .check('email', 'Email is not valid.')
    .notEmpty()
    .isEmail()
    .run(req);
  await expressValidator
    .check('password', 'Password cannot be blank.')
    .notEmpty()
    .run(req);

  const validationResults = await expressValidator.validationResult(req);

  if (validationResults.isEmpty()) {
    await expressValidator
      .check('email')
      .trim()
      .escape()
      .normalizeEmail()
      .run(req);
    await expressValidator.check('password').trim().escape().run(req);
  } else {
    return handleResponse(res, 400, { errors: validationResults.array() });
  }

  passport.authenticate('local', (err, user) => {
    if (err) {
      return handleResponse(res, 400, { error: err });
    }
    if (user) {
      const tokenContents = {
        sub: '' + user.id,
        name: user.email,
        iat: Date.now() / 1000,
        'https://hasura.io/jwt/claims': {
          'x-hasura-allowed-roles': ['mine', 'user'],
          'x-hasura-user-id': '' + user.id,
          'x-hasura-default-role': 'user',
          'x-hasura-role': 'user',
        },
      };

      handleResponse(res, 200, {
        token: jwt.sign(tokenContents, process.env.AUTH_PRIVATE_KEY),
      });
    }
  })(req, res, next);
};

/**
 * POST /signup
 * Create a new local account.
 */
export const postSignup = async (req, res, next) => {
  await expressValidator
    .check('email', 'Email is not valid.')
    .notEmpty()
    .isEmail()
    .run(req);
  await expressValidator
    .check('password', 'Password must be at least 4 characters long.')
    .notEmpty()
    .isLength({ min: 4 })
    .run(req);
  await expressValidator
    .check('confirmPassword', 'Passwords do not match.')
    .notEmpty()
    .equals(req.body.password)
    .run(req);

  const validationResults = await expressValidator.validationResult(req);

  try {
    if (validationResults.isEmpty()) {
      await expressValidator
        .check('email')
        .trim()
        .escape()
        .normalizeEmail()
        .run(req);
      await expressValidator.check('password').trim().escape().run(req);

      await User.query().allowGraph('[email, password]').insert({
        email: req.body.email,
        password: req.body.password,
      });
    } else {
      return handleResponse(res, 400, { errors: validationResults.array() });
    }
  } catch (err) {
    errorHandler(err, res);
    return;
  }

  passport.authenticate('local', (err, user) => {
    if (err) {
      return handleResponse(res, 400, { error: err });
    }
    if (user) {
      handleResponse(res, 200, user.getUser());
    }
  })(req, res, next);
};

export default {
  postLogin,
  postSignup,
};

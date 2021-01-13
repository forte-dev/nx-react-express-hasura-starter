import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import { User } from '../db/schema';

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    function (username, password, done) {
      User.query()
        .where('email', username)
        .first()
        .then(function (user) {
          if (!user) {
            return done('Unknown user');
          }
          user.verifyPassword(password, function (err, passwordCorrect) {
            if (err) {
              return done(err);
            }
            if (!passwordCorrect) {
              return done('Invalid password');
            }
            return done(null, user);
          });
        })
        .catch(function (err) {
          done(err);
        });
    }
  )
);

export default passport;

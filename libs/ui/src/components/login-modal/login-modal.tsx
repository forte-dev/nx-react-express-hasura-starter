import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Alert from '@material-ui/core/Alert';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { green } from '@material-ui/core/colors';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
  signInValidationSchema,
  signUpValidationSchema,
} from '@forte-dev/validations';

import { InputField } from '../form-fields/form-fields';
// noinspection ES6PreferShortImport
import { TabPanel, a11yProps } from '../tab-panel/tab-panel';

/* eslint-disable-next-line */
export interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  loginRequest: ({ email, password }) => void;
  signUpRequest: ({ email, password, passwordConfirmation }) => void;
}

LoginModal.prototype = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  loginRequest: PropTypes.func,
  signUpRequest: PropTypes.func,
};

const useStyles = makeStyles((theme: Theme) => {
  return {
    root: {
      flexGrow: 1,
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  };
});

export function LoginModal(props: LoginModalProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const componentName = 'login-modal';
  const { onClose, open, loginRequest, signUpRequest } = props;
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const authentication = useSelector((store) => store.authentication);

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [formActions, setFormActions] = useState(() => null);

  const [signInFormState, setSignInFormState] = useState({
    formID: 'SignIn',
    email: 'testUser@email.co',
    password: 'testPasswor',
  });
  const [signUpFormState, setSignUpFormState] = useState({
    formID: 'SignUp',
    email: 'testUser!@email.com',
    password: 'testPassword',
    passwordConfirmation: 'testPassword',
  });

  const handleTabChange = (event, newValue) => setCurrentTabIndex(newValue);

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  useEffect(() => {
    let isInitialized = true;

    if (isInitialized) {
      if (authentication?.token) {
        setLoading(false);
        setSuccess(true);

        if (formActions?.setTouched) {
          formActions.setTouched({});
          formActions.setSubmitting(false);
        }
      }

      if (authentication?.user) {
        console.log('We are signed up');
        // setLoading(false);
        // setSuccess(true);
        //
        // if (formActions?.setTouched) {
        //   formActions.setTouched({});
        //   formActions.setSubmitting(false);
        // }
      }

      if (authentication?.error) {
        setLoading(false);
        setSuccess(false);

        if (formActions?.setTouched) {
          formActions.setSubmitting(false);
        }
      }
    }

    return () => (isInitialized = false);
  }, [formActions, authentication]);

  const handleLoginUser = (values, actions) => {
    setFormActions(actions);

    if (values.formID === 'SignIn') {
      setSignInFormState(values);
      setLoading(true);
      dispatch(
        loginRequest({
          email: values.email,
          password: values.password,
        })
      );
    }

    if (values.formID === 'SignUp') {
      setSignUpFormState(values);
      setLoading(true);
      dispatch(
        signUpRequest({
          email: values.email,
          password: values.password,
          passwordConfirmation: values.passwordConfirmation,
        })
      );
    }
  };

  function SignInForm() {
    return (
      <Formik
        initialValues={signInFormState}
        onSubmit={handleLoginUser}
        validationSchema={signInValidationSchema}
      >
        {({ isSubmitting, dirty, isValid }) => {
          return (
            <Form id={'SignIn'}>
              <DialogContent style={{ minHeight: '23rem' }}>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-evenly"
                  alignItems="stretch"
                  spacing={3}
                >
                  <Grid item xs={12}>
                    <InputField
                      name={'email'}
                      label={t('EMAIL')}
                      required={true}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputField
                      type={'password'}
                      name={'password'}
                      label={t('PASSWORD')}
                      required={true}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {authentication?.error && (
                      <Alert severity="error">{authentication.error}</Alert>
                    )}
                  </Grid>
                </Grid>
              </DialogContent>

              <DialogActions style={{ justifyContent: 'center' }}>
                <div className={classes.wrapper}>
                  <Button
                    type="submit"
                    variant="contained"
                    className={buttonClassname}
                    autoFocus
                    disabled={isSubmitting || !(isValid && dirty)}
                  >
                    {t('SIGN_IN')}
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    );
  }

  function SignUpForm() {
    return (
      <Formik
        initialValues={signUpFormState}
        onSubmit={handleLoginUser}
        validationSchema={signUpValidationSchema}
      >
        {({ isSubmitting, dirty, isValid }) => {
          return (
            <Form id={'SignUp'}>
              <DialogContent style={{ minHeight: '23rem' }}>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-evenly"
                  alignItems="stretch"
                  spacing={3}
                >
                  <Grid item xs={12}>
                    <InputField
                      name={'email'}
                      label={t('EMAIL')}
                      required={true}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputField
                      type={'password'}
                      name={'password'}
                      label={t('PASSWORD')}
                      required={true}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputField
                      name={'passwordConfirmation'}
                      label={t('CONFIRM_PASSWORD')}
                      required={true}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    {authentication?.error && (
                      <Alert severity="error">{authentication.error}</Alert>
                    )}
                  </Grid>
                </Grid>
              </DialogContent>

              <DialogActions style={{ justifyContent: 'center' }}>
                <div className={classes.wrapper}>
                  <Button
                    type="submit"
                    variant="contained"
                    className={buttonClassname}
                    autoFocus
                    disabled={isSubmitting || !(isValid && dirty)}
                  >
                    {t('SIGN_UP')}
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={classes.buttonProgress}
                    />
                  )}
                </div>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    );
  }

  return (
    <Dialog
      fullWidth={true}
      maxWidth={'xs'}
      onClose={onClose}
      aria-labelledby={`${componentName}-dialog-title`}
      open={open}
    >
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={currentTabIndex}
            onChange={handleTabChange}
            aria-label={`${componentName.replace(/-/g, ' ')} tabs`}
            centered
          >
            <Tab label={t('SIGN_IN')} {...a11yProps(0, componentName)} />
            <Tab label={t('SIGN_UP')} {...a11yProps(1, componentName)} />
          </Tabs>
        </AppBar>

        <TabPanel id={componentName} value={currentTabIndex} index={0}>
          <SignInForm />
        </TabPanel>
        <TabPanel id={componentName} value={currentTabIndex} index={1}>
          <SignUpForm />
        </TabPanel>
      </div>
    </Dialog>
  );
}

export default LoginModal;

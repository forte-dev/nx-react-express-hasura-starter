import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

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
  onSubmit: (values, actions) => Promise<void>;
}

LoginModal.prototype = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

const useStyles = makeStyles(() => {
  return {
    root: {
      flexGrow: 1,
    },
  };
});

export function LoginModal(props: LoginModalProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const componentName = 'login-modal';

  const { onClose, open, onSubmit } = props;
  const [currentTabIndex, setCurrentTabIndex] = React.useState(0);

  const handleTabChange = (event, newValue) => setCurrentTabIndex(newValue);

  function SignInForm() {
    return (
      <Formik
        initialValues={{ formID: 'SignIn', email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={signInValidationSchema}
      >
        {({ isSubmitting, dirty, isValid }) => {
          return (
            <Form id={'SignIn'}>
              <DialogContent style={{ minHeight: '18rem' }}>
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
                </Grid>
              </DialogContent>

              <DialogActions style={{ justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant={'outlined'}
                  autoFocus
                  disabled={isSubmitting || !(isValid && dirty)}
                >
                  {t('SIGN_IN')}
                </Button>
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
        initialValues={{
          formID: 'SignUp',
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={onSubmit}
        validationSchema={signUpValidationSchema}
      >
        {({ isSubmitting, dirty, isValid }) => {
          return (
            <Form id={'SignUp'}>
              <DialogContent style={{ minHeight: '18rem' }}>
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
                </Grid>
              </DialogContent>

              <DialogActions style={{ justifyContent: 'center' }}>
                <Button
                  type="submit"
                  variant={'outlined'}
                  autoFocus
                  disabled={isSubmitting || !(isValid && dirty)}
                >
                  {t('SIGN_UP')}
                </Button>
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

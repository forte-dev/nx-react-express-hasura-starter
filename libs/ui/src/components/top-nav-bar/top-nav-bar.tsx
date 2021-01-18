import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { useTranslation } from 'react-i18next';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ThemePaletteModeToggleButton from '../theme-palette-mode-toggle-button/theme-palette-mode-toggle-button';
import LanguageSelectDropdown from '../language-select-dropdown/language-select-dropdown';
import { Message } from '@forte-dev/api-interfaces';

import LoginModal from '../../components/login-modal/login-modal';
// noinspection ES6PreferShortImport
import {
  signUpRequest,
  loginRequest,
} from '../../redux-modules/authentication/actions';

/* eslint-disable-next-line */
export interface TopNavBarProps {
  color: 'inherit' | 'transparent' | 'default' | 'primary' | 'secondary';
  className: string;
  elevation: number;
  position: 'fixed' | 'absolute' | 'relative' | 'static' | 'sticky';

  // handleLoginClick: () => void;
  // handleLogoutClick: () => void;
  // userIsAuthenticated: boolean;
}

TopNavBar.propTypes = {
  // handleLoginClick: PropTypes.func,
  // handleLogoutClick: PropTypes.func,
  // userIsAuthenticated: PropTypes.bool,
};

const useStyles = makeStyles((theme) => {
  return {
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
  };
});

export function TopNavBar(props: TopNavBarProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [m, setMessage] = useState<Message>({ message: '' });

  const [openLoginDialog, setLoginDialog] = useState(false);
  const authenticated = useSelector(
    (store) => store.authentication.authenticated
  );

  const handleLoginClick = () => {
    setLoginDialog(!openLoginDialog);
  };

  const handleLogoutClick = () => {
    // userService.logout();
    // setUserIsAuthenticated(false);
  };

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <AppBar {...props}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          {t('COMPANY')}
        </Typography>
        <nav>
          <Link
            variant="button"
            color="textPrimary"
            href="http://localhost:4444/api"
            target="_blank"
            className={classes.link}
            rel="noopener noreferrer"
          >
            {m.message}
          </Link>
        </nav>
        <LanguageSelectDropdown />
        <ThemePaletteModeToggleButton />

        {authenticated ? (
          <Button
            variant="outlined"
            className={classes.link}
            onClick={handleLogoutClick}
          >
            {t('LOGOUT')}
          </Button>
        ) : (
          <Button
            variant="outlined"
            className={classes.link}
            onClick={handleLoginClick}
          >
            {t('LOGIN')}
          </Button>
        )}
      </Toolbar>
      <LoginModal
        loginRequest={loginRequest}
        signUpRequest={signUpRequest}
        open={openLoginDialog}
        onClose={handleLoginClick}
      />
    </AppBar>
  );
}

export default TopNavBar;

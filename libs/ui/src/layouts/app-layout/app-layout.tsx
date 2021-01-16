import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { blue, pink } from '@material-ui/core/colors';
import React, { useEffect, useState, useMemo } from 'react';
import { darken, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, useMediaQuery, ThemeProvider } from '@material-ui/core';

import { createUiTheme } from '../../theme/create-ui-theme';
import getCookie from '../../utils/get-cookie/get-cookie';

const AppConfigContext = React.createContext(null);

/* eslint-disable-next-line */
export interface AppLayoutProps {
  children: React.ReactNode;
}

AppLayout.propTypes = {
  children: PropTypes.node,
};

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export function AppLayout(props: AppLayoutProps) {
  const { children } = props;
  const classes = useStyles();
  const { i18n } = useTranslation();

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);
  const [language, setLanguage] = React.useState(i18n.language);

  useEffect(() => {
    let isInitialized = true;

    if (isInitialized) {
      const paletteMode = getCookie('paletteMode');
      setDarkMode(paletteMode === 'dark');
    }

    return () => (isInitialized = false);
  }, []);

  const theme = useMemo(() => {
    const nextTheme = createUiTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: darkMode ? blue[200] : blue[700],
        },
        secondary: {
          main: darkMode ? pink[200] : darken(pink.A400, 0.1),
        },
        background: {
          // default: darkMode ? '#121212' : '#fff',
        },
      },
    });

    // nextTheme.palette.background['level2'] = darkMode ? '#333' : nextTheme.palette.grey[100];
    // nextTheme.palette.background['level1'] = darkMode ? nextTheme.palette.grey[900] : '#fff';

    return nextTheme;
  }, [darkMode]);

  const toggleDarkMode = () => {
    document.cookie = `paletteMode=${!darkMode ? 'dark' : 'light'}`;
    setDarkMode(!darkMode);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const ctx = {
    darkMode,
    toggleDarkMode,
    language,
    changeLanguage,
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <AppConfigContext.Provider value={ctx}>
          {children}
        </AppConfigContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default AppLayout;

export { AppConfigContext };

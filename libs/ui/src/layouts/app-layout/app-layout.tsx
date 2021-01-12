import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';
import { blue, pink } from '@material-ui/core/colors';
import { darken, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, useMediaQuery, ThemeProvider } from '@material-ui/core';

import { StylesProvider } from '@material-ui/core';

import { createUiTheme } from '../../theme/create-ui-theme';

const PaletteModeContext = React.createContext(null);

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
  const classes = useStyles();
  const { children } = props;

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

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
    setDarkMode(!darkMode);
  };

  const ctx = {
    darkMode,
    toggleDarkMode,
  };

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <PaletteModeContext.Provider value={ctx}>{children}</PaletteModeContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default AppLayout;

export { PaletteModeContext };

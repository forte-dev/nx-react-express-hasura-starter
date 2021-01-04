import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

import { UiTheme } from '@forte-dev/ui-theme';

/* eslint-disable-next-line */
export interface AppLayoutProps {
  children: React.ReactNode;
}

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

  return (
    <div className={classes.root}>
      <ThemeProvider theme={UiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </div>
  );
}

export default AppLayout;

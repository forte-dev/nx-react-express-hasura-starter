import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// noinspection ES6PreferShortImport
import { ThemePaletteModeToggleButton } from '../theme-palette-mode-toggle-button/theme-palette-mode-toggle-button';
import { Message } from '@forte-dev/api-interfaces';

/* eslint-disable-next-line */
export interface TopNavBarProps {}

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
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
  const [m, setMessage] = useState<Message>({ message: '' });
  const classes = useStyles();

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Company name
        </Typography>
        <nav>
          <Link variant="button" color="textPrimary" href="http://localhost:4444/api" target="_blank" className={classes.link} rel="noopener noreferrer">
            {m.message}
          </Link>
        </nav>
        <ThemePaletteModeToggleButton />
        <Button href="/" variant="outlined" className={classes.link}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBar;

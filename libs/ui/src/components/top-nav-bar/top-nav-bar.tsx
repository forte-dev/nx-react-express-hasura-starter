import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ThemePaletteModeToggleButton from '../theme-palette-mode-toggle-button/theme-palette-mode-toggle-button';
import LanguageSelectDropdown from '../language-select-dropdown/language-select-dropdown';
import { Message } from '@forte-dev/api-interfaces';
import { useTranslation } from 'react-i18next';

/* eslint-disable-next-line */
export interface TopNavBarProps {
  handleLoginClick: () => void;
}

TopNavBar.propTypes = {
  handleLoginClick: PropTypes.func,
};

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
  const classes = useStyles();
  const { t } = useTranslation();
  const { handleLoginClick } = props;
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
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
        <Button
          variant="outlined"
          className={classes.link}
          onClick={handleLoginClick}
        >
          {t('LOGIN')}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default TopNavBar;

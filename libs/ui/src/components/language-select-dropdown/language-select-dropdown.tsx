import * as React from 'react';
import { Box } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

// noinspection ES6PreferShortImport
import { AppConfigContext } from '../../layouts/app-layout/app-layout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  })
);

/* eslint-disable-next-line */
export interface LanguageSelectDropdownProps {}

export function LanguageSelectDropdown(props: LanguageSelectDropdownProps) {
  const classes = useStyles();
  const { t } = useTranslation();
  const componentName = 'language-select-dropdown';

  return (
    <AppConfigContext.Consumer>
      {({ changeLanguage, language }) => {
        const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
          changeLanguage(event.target.value as string);
        };

        return (
          <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id={`${componentName}-outlined-label`}>
                {t('LANGUAGE')}
              </InputLabel>
              <Select
                labelId={`${componentName}-outlined-label`}
                id={`${componentName}-outlined`}
                value={language}
                onChange={handleChange}
                label={t('LANGUAGE')}
              >
                <MenuItem value="en">{'English'}</MenuItem>
                <MenuItem value="fr">{'Français'}</MenuItem>
              </Select>
            </FormControl>
          </div>
        );
      }}
    </AppConfigContext.Consumer>
  );
}

export default LanguageSelectDropdown;

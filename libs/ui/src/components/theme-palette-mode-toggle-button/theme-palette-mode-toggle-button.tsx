import React from 'react';
import { Box, Button } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness5Icon from '@material-ui/icons/Brightness5';

// noinspection ES6PreferShortImport
import { PaletteModeContext } from '../../layouts/app-layout/app-layout';

/* eslint-disable-next-line */
export interface ThemePaletteModeToggleButtonProps {}

export function ThemePaletteModeToggleButton(
  props: ThemePaletteModeToggleButtonProps
) {
  return (
    <PaletteModeContext.Consumer>
      {({ toggleDarkMode, darkMode }) => (
        <Box sx={{ color: 'text.primary' }}>
          <Button onClick={toggleDarkMode}>
            {darkMode ? <Brightness5Icon /> : <Brightness4Icon />}
          </Button>
        </Box>
      )}
    </PaletteModeContext.Consumer>
  );
}

export default ThemePaletteModeToggleButton;

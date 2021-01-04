import React from 'react';
import { createMuiTheme } from '@material-ui/core';

import shadows, { partialShadows } from './shadows';
import palette from './palette';
import breakpoints from './breakpoints';
import transitions from './transitions';
import typography from './typography';
import overrides from './overrides';
import zIndex from './z_index';
import mixins from './mixins';

export const UiTheme = createMuiTheme({
  ...breakpoints,
  ...palette,
  ...mixins,
  ...overrides,
  ...shadows,
  ...partialShadows,
  ...typography,
  ...transitions,
  ...zIndex,

  direction: 'ltr',
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default UiTheme;

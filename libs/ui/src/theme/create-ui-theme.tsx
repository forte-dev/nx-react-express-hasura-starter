import { createMuiTheme, ThemeOptions } from '@material-ui/core';

import breakpoints from './components/breakpoints';
import mixins from './components/mixins';
import components from './components/components';
import palette from './components/palette';
import shadows from './components/shadows';
import typography from './components/typography';
import transitions from './components/transitions';
import zIndex from './components/z-index';

export function createUiTheme(options: ThemeOptions) {
  return createMuiTheme({
    ...breakpoints,
    direction: 'ltr',
    ...mixins,
    components: { ...components },
    ...palette,
    ...shadows,
    ...typography,
    shape: {
      borderRadius: 4,
    },
    ...transitions,
    ...zIndex,
    ...options,
  });
}

export default createUiTheme;

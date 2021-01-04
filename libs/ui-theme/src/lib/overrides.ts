import { vcColorPalette } from './palette';

export default {
  MuiCssBaseline: {
    '@global': {
      html: {
        WebkitFontSmoothing: 'auto',
      },
    },
  },
  MuiAppBar: {
    colorPrimary: {
      color: '#1F1F1F',
      backgroundColor: '#FFFFFF',
    },
    colorSecondary: {
      color: '#1F1F1F',
      backgroundColor: '#e5e5f1',
    },
  },
  MuiStepConnector: {
    root: {
      visibility: 'hidden',
    },
  },
  MuiStepper: {
    root: {
      minHeight: 57,
      maxHeight: 57,
      backgroundColor: vcColorPalette.violet.lighter,
    },
  },
  MuiStepLabel: {
    label: {
      color: vcColorPalette.violet.light,
    },
    active: {
      color: vcColorPalette.violet.base,
    },
  },
  MuiStepIcon: {
    root: {
      color: vcColorPalette.violet.light,
    },
    active: {
      color: vcColorPalette.violet.base,
    },
  },
  MuiTabs: {
    root: {
      '& button': {
        textTransform: 'capitalize',
      },
    },
    indicator: {
      backgroundColor: vcColorPalette.violet.base,
    },
  },
  MuiButton: {
    root: {
      minHeight: 40,
      height: 40,
      maxHeight: 40,
      borderRadius: 40,
    },
  },
  MuiIcon: {
    root: {
      fontSize: 34,
      color: 'black',
    },
  },
  MuiIconButton: {
    root: {
      color: 'black',
    },
  },
  MuiSvgIcon: {
    root: {
      fontSize: 34,
      verticalAlign: 'middle',
      marginBottom: '1px',
    },
  },
  MuiOutlinedInput: {
    root: {
      backgroundColor: vcColorPalette.white,
    },
  },
};

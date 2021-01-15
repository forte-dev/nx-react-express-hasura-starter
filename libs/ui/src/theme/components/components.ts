const components = {
  MuiCssBaseline: {
    styleOverrides: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        '*::-webkit-scrollbar': {
          width: '1.3%',
          maxWidth: '5px',
        },
      },
    },
  },

  MuiButtonBase: {
    defaultProps: {},
    styleOverrides: {
      root: {
        disableRipple: true,
      },
    },
  },
  MuiButton: {
    defaultProps: {},
    styleOverrides: {
      root: {},
    },
  },

  MuiAppBar: {
    defaultProps: {},
    styleOverrides: {
      colorPrimary: {},
      colorSecondary: {},
    },
  },
  MuiStepConnector: {
    defaultProps: {},
    styleOverrides: {
      root: {},
    },
  },
  MuiStepper: {
    defaultProps: {},
    styleOverrides: {
      root: {},
    },
  },
  MuiStepLabel: {
    defaultProps: {},
    styleOverrides: {
      label: {},
      active: {},
    },
  },
  MuiStepIcon: {
    defaultProps: {},
    styleOverrides: {
      root: {},
      active: {},
    },
  },
  MuiTabs: {
    defaultProps: {},
    styleOverrides: {
      root: {},
      indicator: {},
    },
  },
  MuiIcon: {
    defaultProps: {},
    styleOverrides: {
      root: {},
    },
  },
  MuiIconButton: {
    defaultProps: {},
    styleOverrides: {
      root: {},
    },
  },
  MuiSvgIcon: {
    defaultProps: {},
    styleOverrides: {
      root: {},
    },
  },
  MuiOutlinedInput: {
    defaultProps: {},
    styleOverrides: {
      root: {},
    },
  },
};

export default components;

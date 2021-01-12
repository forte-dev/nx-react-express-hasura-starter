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
    defaultProps: {
      // The props to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
    styleOverrides: {
      root: {
        // The props to apply
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
  MuiButton: {
    defaultProps: {},
    styleOverrides: {
      root: {
        borderRadius: 40,
      },
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

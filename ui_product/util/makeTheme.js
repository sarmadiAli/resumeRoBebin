import { createTheme } from '@mui/material/styles';
import { createBreakpoints } from '@mui/system';

const breakpoints = createBreakpoints({});

const makeTheme = initData => {
  let theme = createTheme({
    palette: {
      common: {
        black: '#000',
        white: '#fff'
      },
      primary: {
        // main: initData?.theme?.primary_color ? initData?.theme?.primary_color : themeData?.customer?.getAppearance?.theme?.primary_color ? themeData?.customer?.getAppearance?.theme?.primary_color : '#46314E'
        main: '#46314E'
      },
      secondary: {
        // main: initData?.theme?.second_primary_color ? initData?.theme?.second_primary_color : themeData?.customer?.getAppearance?.theme?.second_primary_color ? themeData?.customer?.getAppearance?.theme?.second_primary_color : '#FFEDB8'
        main: '#FFD2AA'
      },
      discount: {
        // main: initData?.theme?.discount_color ? initData?.theme?.discount_color : themeData?.customer?.getAppearance?.theme?.discount_color  ? themeData?.customer?.getAppearance?.theme?.discount_color : '#CAA87F',
        main: '#CAA87F'
      },
      warning: {
        main: '#FFA24C'
      },
      error: {
        main: '#FF5875'
      },
      info: {
        main: '#2196f3'
      },
      success: {
        main: '#37B86D'
      },
      divider: 'rgba(28, 27, 32, 20%)',
      grey: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#d5d5d5',
        A200: '#aaaaaa',
        A400: '#303030',
        A700: 'rgba(0, 0, 0, 0.87)'
      },
      black: {
        500: 'rgba(28, 27, 32, 100%)',
        100: 'rgba(28, 27, 32, 100%)',
        70: 'rgba(28, 27, 32, 70%)',
        40: 'rgba(28, 27, 32, 40%)',
        20: 'rgba(28, 27, 32, 20%)',
        10: 'rgba(28, 27, 32, 10%)',
        5: 'rgba(28, 27, 32, 5%)'
      },
      white: {
        500: 'rgba(255, 255, 255, 100%)',
        100: 'rgba(255, 255, 255, 100%)',
        70: 'rgba(255, 255, 255, 70%)',
        40: 'rgba(255, 255, 255, 40%)',
        20: 'rgba(255, 255, 255, 20%)',
        10: 'rgba(255, 255, 255, 10%)',
        5: 'rgba(255, 255, 255, 5%)'
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.30)',
        disabled: 'rgba(0, 0, 0, 0.38)'
      }
    },
    typography: {
      fontFamily: ['iransans', 'sans-serif'].join(','),
      fontSize: 16,
      htmlFontSize: 16,
      fontWeightRegular: 400,
      fontWeightBold: 700,
      [breakpoints.down('md')]: {
        fontSize: 14,
        htmlFontSize: 14
      },

      h1: {
        fontSize: '3rem',
        fontWeight: 700,
        lineHeight: 1.2
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 700,
        lineHeight: 1.2
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 700,
        lineHeight: 1.2
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 700,
        lineHeight: 1.2
      },
      h5: {
        fontSize: '1.25rem',
        fontWeight: 700,
        lineHeight: 1.2
      },
      h6: {
        fontSize: '1rem',
        fontWeight: 700,
        lineHeight: 1.2
      },
      subtitle1: {
        fontSize: '1.2rem',
        fontWeight: 700
      },
      subtitle2: {
        fontSize: '1rem',
        fontWeight: 700
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.8
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.8
      },
      button: {
        fontSize: '0.875rem',
        fontWeight: 700
      },
      caption: {
        fontSize: '0.75rem',
        fontWeight: 400
      },
      overline: {
        fontSize: '0.75rem',
        fontWeight: 400
      }
    },
    shape: {
      borderRadius: 2
    },
    props: {
      MuiTab: {
        disableRipple: true
      }
    },
    direction: 'rtl',
    spacing: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    zIndex: {
      mobileStepper: 1000,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400
    },
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
        xxl: 2140
      }
    }
  });
  theme = createTheme(theme, {
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            direction: 'rtl',
            textAlign: 'right'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            padding: '0.875rem 2rem'
          },
          contained: {
            color: '#fff'
          }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: theme.palette.primary.main
          }
        }
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            border: 'none',
            padding: '0.5rem 0',
            boxShadow: 'none',
            borderRadius: 0,
            '&.Mui-expanded': {
              margin: 0
            }
          }
        }
      }
    }
  });

  return {
    theme
  };
};

export default makeTheme;

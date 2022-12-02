import { deepmerge } from '@mui/utils'
import { alpha, createTheme } from '@mui/material';

/**
 * MUI Components Theme
 */

const baseThemeOptions = createTheme({

  typography: {
    "fontFamily": '"robotomedium" sans-serif',
    "fontWeight": '600',
    button: {
      textTransform: "none"
    }
  },
  
});


export const muiLightTheme = createTheme(deepmerge({

  palette: {
    primary: {
      main: "#2563eb",
    },
  },


}, baseThemeOptions));

export const muiDarkTheme = createTheme(deepmerge({

  palette: {
    primary: {
      main: "#93c5fd",
    }

  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#171717"
        }
      }
    },
    MuiTextField: {

      styleOverrides: {

        root: {

          '& label':
          {
            color: alpha("#93c5fd", 0.5),
          },

          '& label.Mui-focused': {
            color: "#93c5fd",
            borderColor: "#93c5fd"
          },

          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: "#93c5fd",
              color: "#93c5fd"
            },

            '&:hover fieldset': {
              borderColor: "#93c5fd",
              color: "rgba(147, 197, 253, 50)",
            },

            '&.Mui-focused fieldset': {
              borderColor: "#93c5fd"
            }
          },

        }
      }
    }
  }

}, baseThemeOptions));

/**
 * Tailwind Theme
 */


export function setTailwindDarkTheme(changeToDark) {
  if (changeToDark) {
    setNightTheme();
  } else {
    setDayTheme();
  }
}

function setDayTheme() {
  document.documentElement.classList.remove("dark");
}

function setNightTheme() {
  document.documentElement.classList.add("dark");
}




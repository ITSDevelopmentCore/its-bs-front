import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils'
import { alpha } from '@mui/material';


/**
 * MUI Components Theme
 */

const baseThemeOptions = {

  typography: {
    fontFamily: 'roboto, sans-serif',
    button: {
      textTransform: "none"
    },
    body:{
      fontWeight: 700
    }
  },
};

export const muiLightTheme = createTheme(deepmerge({

  palette: {
    primary: {
      main: "#2563eb"
    }
  },

}, baseThemeOptions));

export const muiDarkTheme = createTheme(deepmerge({

  palette: {
    primary: {
      main: "#93c5fd",
    },
  },
  
  components: {

    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#262626"
        }
      }
    },

    MuiTextField: {

      styleOverrides: {

        root: {
          
          '& label' : 
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




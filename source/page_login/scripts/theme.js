import { createTheme } from '@mui/material';
import { deepmerge } from '@mui/utils'

/**
 * MUI Components Theme
 */
const baseThemeOptions = {
  typography: {
    fontFamily : 'robotoregular, sans-serif'
  }
};

export const muiLightTheme = createTheme(deepmerge({

  palette: {
    primary : {
      main : "#2563eb"
    }
  }

}, baseThemeOptions));

export const muiDarkTheme = createTheme(deepmerge({

  palette: {
    primary : {
      main : "#93c5fd"
    }
  }

}, baseThemeOptions));

/**
 * Tailwind Theme
 */


 export function setTailwindDarkTheme(changeToDark)
 {
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




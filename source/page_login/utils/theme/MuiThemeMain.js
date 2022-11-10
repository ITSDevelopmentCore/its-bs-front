import { createTheme } from '@mui/material/styles';


const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...mode === 'light'
            ? {
                primary: "#38bdf8",
                divider: "#38bdf8",
                text: {
                    primary: "#ffffff",
                    secondary: "#ffffff",
                },
            }
            : {
                primary: "#9333ea",
                divider: "#9333ea",
                background: {
                    default: "#334155",
                    paper: "#334155",
                },
                text: {
                    primary: "#ffffff",
                    secondary: "#ffffff",
                },
            },
    },
});

export let MainTheme = createTheme
    ({
        palette: {
            primary: {
                main: '#00ff00',
            },
            secondary: {
                main: '#00ff00',
                dark: '#ffffff'
            },
        },
        typography: {

        },
        components: {

        },
        breakpoints: {

        },
        zIndex: {

        },
        transitions: {

        }
    });
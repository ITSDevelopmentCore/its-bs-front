import React, { useState } from "react"
import { ThemeProvider } from "@mui/material";

import SideMenu from '../components/SideMenu';
import MainWindow from '../components/MainWindow';
import { muiDarkTheme, muiLightTheme } from "../scripts/theme";

import { WINDOW_TAG_USER_BOTS } from "../../lib/navigation/Navigator";

import { setTailwindDarkTheme } from "../scripts/theme";



export default function Main() {

    const [darkTheme, setMuiDarkTheme] = useState(false);

    const changeTheme = () => {
        if (!darkTheme) {
            setMuiDarkTheme(true);
            setTailwindDarkTheme(true);
        }
        else {
            setMuiDarkTheme(false);
            setTailwindDarkTheme(false);
        }
    }

    const [currentWindow, setCurrentWindow] = useState(WINDOW_TAG_USER_BOTS);

    const menuUtemClickListener = function (currentWindowTag) {
        setCurrentWindow(currentWindowTag);
    }

    return (
        <ThemeProvider theme={darkTheme ? muiDarkTheme : muiLightTheme}>

            <SideMenu
                changeThemeListener={changeTheme}
                menuItemClickListener={menuUtemClickListener}>
            </SideMenu>

            <MainWindow
                currentWindowTag={currentWindow}>
            </MainWindow>

        </ThemeProvider>
    )
}



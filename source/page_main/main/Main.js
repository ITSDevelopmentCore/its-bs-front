import React, { useState } from "react"
import { ThemeProvider } from "@mui/material";

import SideMenu from '../components/SideMenu';
import MainWindow from '../components/MainWindow';
import { muiDarkTheme, muiLightTheme } from "../scripts/theme";

import { WINDOW_TAG_BILLING, WINDOW_TAG_USER, WINDOW_TAG_USER_BOTS, WINDOW_TAG_EDITOR } from "../../lib/navigation/Navigator";

export default function Main() {

    const [darkTheme, setMuiDarkTheme] = useState(false);

    const [currentWindow, setCurrentWindow] = useState(WINDOW_TAG_USER_BOTS);

    const menuUtemClickListener = function (currentWindowTag) {
        setCurrentWindow(currentWindowTag);
    }
    

    return (
        <ThemeProvider theme={darkTheme ? muiDarkTheme : muiLightTheme}>

            <SideMenu
                menuItemClickListener={menuUtemClickListener}>
            </SideMenu>

            <MainWindow
                currentWindowTag={currentWindow}>
            </MainWindow>

        </ThemeProvider>
    )
}



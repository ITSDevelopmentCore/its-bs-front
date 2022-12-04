import React, { useState } from "react"
import { ThemeProvider } from "@mui/material";

import Navigator from "../components/Navigator";
import SideMenu from '../components/SideMenu';
import { muiDarkTheme, muiLightTheme, setTailwindDarkTheme } from "../../common/scripts/theme";

import { WINDOW_TAG_USER_BOTS } from "../components/Navigator";


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

            <Navigator
                currentWindowTag={WINDOW_TAG_USER_BOTS}>
            </Navigator>

        </ThemeProvider>
    )
}



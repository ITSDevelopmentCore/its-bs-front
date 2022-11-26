import React, {useState} from "react"
import { ThemeProvider } from "@mui/material";

import SideMenu from '../components/SideMenu';
import MainWindow from '../components/MainWindow';
import { muiDarkTheme, muiLightTheme } from "../scripts/theme";

export default function Main() {

    const [darkTheme, setMuiDarkTheme] = useState(false);
    const [screen, setScreen] = useState("WindowUser");

    const menuHandler = function(screenz){
        setScreen(screenz)
        alert(screen)
    }
    

    return (
        <ThemeProvider theme={darkTheme ? muiDarkTheme : muiLightTheme}>
            <SideMenu menuListener={menuHandler}></SideMenu>
            <MainWindow currentScreen={screen}></MainWindow>
        </ThemeProvider>
    )
}



import React, {useState} from "react"
import { ThemeProvider } from "@mui/material";

import SideMenu from '../components/SideMenu'
import { muiDarkTheme, muiLightTheme } from "../scripts/theme";


export default function Main() {

    const [darkTheme, setMuiDarkTheme] = useState(false);

    return (
        <ThemeProvider theme={darkTheme ? muiDarkTheme : muiLightTheme}>
            <SideMenu></SideMenu>
        </ThemeProvider>
    )
}



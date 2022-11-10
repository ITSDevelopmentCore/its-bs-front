import React from "react"
import { useState, useMemo } from "react";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch'

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import Theme from '../scripts/theme'
import { MainTheme } from "../utils/theme/MuiThemeMain";
import { ThemeProvider } from "@mui/material";

export default function Login() {

    const [mode, setMode] = useState("light");

    

    return (
        <div className="w-full h-full flex flex-col items-center justify-center m-auto space-y-6">

            <ThemeProvider theme={MainTheme}>

                <div className="flex flex-row space-x-4 justify-center items-center">
                    <BsFillSunFill className="text-amber-500 w-6 h-6" />
                    <Switch onChange={Theme} />
                    <BsFillMoonFill className="text-yellow-300 w-6 h-6" />
                </div>

                <h1 className="text-xl font-semibold text-sky-500 dark:text-purple-600">{"<development title>"}</h1>


                <TextField label={"Логин"} defaultValue={"ITS Razex"} />
                <TextField label={"Пароль"} defaultValue={"75867586"} />

                <Button className={"bg-orange-500 dark:bg-purple-600"} variant={"contained"}>Войти</Button>
                <Button className={"dark:text-purple-600"} variant={"outlined"}>Регистрация</Button>
                <Button className={"dark:text-purple-600"} variant={"text"}>Забыл пароль</Button>

            </ThemeProvider>

        </div>
    )
}
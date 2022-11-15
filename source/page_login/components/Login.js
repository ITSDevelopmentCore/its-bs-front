import React, { useState } from "react"

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch'


import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

import { ThemeProvider } from "@mui/material";

import { muiDarkTheme, muiLightTheme, setTailwindDarkTheme } from "../scripts/theme";


export default function Login() {

    const [darkTheme, setMuiDarkTheme] = useState(false);

    const changeTheme = (changeToDark) => {
        if (changeToDark)
        {
            setMuiDarkTheme(true);
            setTailwindDarkTheme(true);
        }
        else
        {
            setMuiDarkTheme(false);
            setTailwindDarkTheme(false);
        }
    }

    return (
        <ThemeProvider theme={darkTheme ? muiDarkTheme : muiLightTheme}>

            <div className="w-full h-full flex flex-col items-center justify-center m-auto space-y-6">

                <div className="flex flex-row space-x-4 justify-center items-center">
                    <BsFillSunFill className="text-amber-500 w-6 h-6" />
                    <Switch onChange={() => changeTheme(!darkTheme)}/>
                    <BsFillMoonFill className="text-yellow-300 w-6 h-6" />
                </div>

                <h1 className="text-xl font-semibold text-sky-500 dark:text-purple-600">{"<development title>"}</h1>

                <TextField className="w-56" label={"Логин"}/>
                <TextField type={"password"} className="w-56" label={"Пароль"}/>

                <Button className="w-56" variant={"contained"}>Войти</Button>
                <Button className="w-56" variant={"outlined"}>Регистрация</Button>
                <Button className="w-56" variant={"text"}>Забыл пароль</Button>
            </div>

        </ThemeProvider>
    )
}
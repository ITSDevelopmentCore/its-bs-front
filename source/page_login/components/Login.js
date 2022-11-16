import React, { useEffect, useState } from "react"

// MUI 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch'
import { ThemeProvider } from "@mui/material";

// React-Icons
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

// Scripts
import { muiDarkTheme, muiLightTheme, setTailwindDarkTheme } from "../scripts/theme";
import GoogleLogin from "./GoogleLogin";

import { GoogleOAuthProvider } from '@react-oauth/google';


export default function Login() {

    const [darkTheme, setMuiDarkTheme] = useState(false);

    const changeTheme = (changeToDark) => {
        if (changeToDark) {
            setMuiDarkTheme(true);
            setTailwindDarkTheme(true);
        }
        else {
            setMuiDarkTheme(false);
            setTailwindDarkTheme(false);
        }
    }

    return (
        <GoogleOAuthProvider clientId={"1031178534860-439stql0akhglcemdgqr1k2e0rak1r6n.apps.googleusercontent.com"}>

        <ThemeProvider theme={darkTheme ? muiDarkTheme : muiLightTheme}>

            <div className="w-64 ml-auto my-10 mr-10 py-5 px-10 bg-white border-2 rounded-xl shadow-xl
            dark:bg-neutral-800 dark:border-neutral-800">
                <div className="flex flex-row space-x-4 justify-center items-center">
                    <BsFillSunFill className="text-amber-500 w-6 h-6" />
                    <Switch onChange={() => changeTheme(!darkTheme)} />
                    <BsFillMoonFill className="text-yellow-300 w-6 h-6" />
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center">

                <div
                    className="drop-shadow-xl border-2 border-white rounded-xl bg-white flex flex-col items-center justify-center py-8 px-16
                dark:bg-neutral-800 dark:border-neutral-800 dark:drop-shadow-none">

                    <TextField sx={{ mb: 2 }} className="w-56" label={"Логин"} />
                    <TextField sx={{ mb: 4 }} type={"password"} className="w-56" label={"Пароль"} />

                    <Button sx={{ mb: 2 }} className="w-56" variant={"contained"}>Войти</Button>

                    <GoogleLogin />

                    <Button sx={{ mb: 2 }} className="w-56" variant={"outlined"}>Регистрация</Button>
                    <Button className="w-56" variant={"text"}>Забыл пароль</Button>

                </div>

            </div>

        </ThemeProvider>
        </GoogleOAuthProvider>
    )
}
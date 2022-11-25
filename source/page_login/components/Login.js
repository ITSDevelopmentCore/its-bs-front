import React, { useState } from "react"

// MUI 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material";

// React
import LoginHeader from './LoginHeader'

// Scripts
import { muiDarkTheme, muiLightTheme, setTailwindDarkTheme } from "../scripts/theme";

// Google
import GoogleLogin from "./GoogleLogin";
import { GoogleOAuthProvider } from '@react-oauth/google';


export default function Login() {

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

    return (
        <GoogleOAuthProvider clientId={"1031178534860-439stql0akhglcemdgqr1k2e0rak1r6n.apps.googleusercontent.com"}>
            <ThemeProvider theme={darkTheme ? muiDarkTheme : muiLightTheme}>

                <div className="flex flex-col h-full">


                    <LoginHeader changeThemeHandler={changeTheme}>

                    </LoginHeader>

                    <div className="w-full flex flex-row flex-initial items-center justify-center mb-10">
                        <span className="text-colorPrimary font-nexa text-5xl font-bold">
                            Bots&nbsp;
                        </span>
                        <span className="text-colorBlack font-nexa text-5xl font-bold
                                                dark:text-sky-200">
                            System
                        </span>
                    </div>


                    <div className="w-full flex flex-col flex-auto items-center">

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
                </div>

            </ThemeProvider>
        </GoogleOAuthProvider>
    )
}
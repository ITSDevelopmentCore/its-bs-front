// React-Icons
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

// MUI
import Switch from '@mui/material/Switch'

// React
import React from "react"

export default function LoginHeader(props) {
    return (
        <div className="flex items-center justify-between my-10 mx-10 flex-initial">

            <div />

            <div className="bg-white border-2 rounded-xl shadow-xl w-64 py-5 px-10 flex flex-row space-x-4 justify-center items-center
                                        dark:bg-neutral-800 dark:border-neutral-800">
                <BsFillSunFill className="text-amber-500 w-6 h-6" />
                <Switch onChange={props.changeThemeHandler} />
                <BsFillMoonFill className="text-yellow-300 w-6 h-6" />
            </div>
        </div>
    )
}


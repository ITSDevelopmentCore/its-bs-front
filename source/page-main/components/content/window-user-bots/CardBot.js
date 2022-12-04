import { Divider } from "@mui/material";
import React from "react";
import { FaTelegramPlane } from 'react-icons/fa'

const tailwindDarkMode = "dark:bg-neutral-600 dark:border-sky-200 dark:text-sky-200 dark:border-2 dark:border-sky-200"

export default function CardBotCreate() {

  function render() {
    return (
      <div
        className={"p-4 min-w-[280px] h-[400px] rounded-xl bg-white m-6 cursor-pointer hover:scale-105 transition-all duration-200 "+tailwindDarkMode}
        elevation={6}>

            <div className="text-white w-full h-[150px] rounded-xl bg-blue-500 flex justify-center items-center mb-4 text-7xl">
            <FaTelegramPlane />
            </div>
            <div className="text-3xl mb-4 font-bold">
                test bot
            </div>
            <Divider/>
            <div className="text-3xl mb-4 font-bold">
                status : on
            </div>
            
      </div>)
  }

  return (render());
}
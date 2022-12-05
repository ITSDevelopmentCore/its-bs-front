import React from "react";
import { AiOutlinePlus } from 'react-icons/ai'

const tailwindDarkMode = "dark:bg-neutral-600 dark:border-sky-200 dark:text-sky-200 dark:border-2 dark:border-sky-200"

export default function CardBotCreate() {

  function render() {
    return (
      <div
        className={"shadow-2xl min-w-[280px] h-[400px] text-blue-800 rounded-xl bg-white m-6 flex justify-center items-center text-7xl cursor-pointer hover:scale-105 transition-all duration-200 "+tailwindDarkMode}
        elevation={6}>
        <AiOutlinePlus />
      </div>)
  }

  return (render());
}
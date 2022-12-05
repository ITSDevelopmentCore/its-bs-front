import React from "react";
import { AiOutlineLock } from 'react-icons/ai'

const tailwindDarkMode = "dark:bg-neutral-600 dark:border-sky-200 dark:text-sky-200 dark:border-2 dark:border-sky-200"

export default function CardBotUnavailable() {

  function render() {
    return (
      <div
        className={"shadow-2xl opacity-50 text-blue-800 min-w-[280px] h-[400px] rounded-xl bg-white m-6 flex justify-center items-center text-7xl cursor-pointer "+tailwindDarkMode}
        elevation={6}>
        <AiOutlineLock className="hover:animate-waving-hand"/>
      </div>)
  }

  return (render());
}
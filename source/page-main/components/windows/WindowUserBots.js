import React from "react";
import CardBotCreate from "../content/window-user-bots/CardBotCreate";
import CardBotUnavailable from "../content/window-user-bots/CardBotUnavailable";
import CardBot from "../content/window-user-bots/CardBot";
import { Box } from "@mui/material";

export default function WindowUserBots() {

    return (
        <Box className="bg-gradient-to-t p-6 from-cyan-500 to-blue-500 h-screen dark:from-neutral-900 dark:to-neutral-800">
            <Box className="flex flex-wrap j">
                <CardBot/>
                <CardBotCreate />
                <CardBotUnavailable />
            </Box>
        </Box>)
}
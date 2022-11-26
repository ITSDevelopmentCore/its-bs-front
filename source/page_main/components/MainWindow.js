import * as React from 'react';

// React Components
import { Container } from '@mui/material';
import WindowEditor from './WindowEditor';
import WindowBilling from './WindowBilling';
import WindowUserBots from './WindowUserBots';
import WindowUser from './WindowUser';


function selectScreen(screenTitle)
{
    switch(screenTitle)
    {
        case "WindowEditor" : return <WindowEditor></WindowEditor>
        case "WindowUserBots" : return <WindowUserBots></WindowUserBots>
        case "WindowBilling" : return <WindowBilling></WindowBilling>
        case "WindowUser" : return <WindowUser></WindowUser>
        default : return <WindowUser></WindowUser>
    }
}

export default function MainWindow(props) {

    return<>
    <Container className="h-full ml-[240px]" maxWidth="xl">
        {selectScreen(props.currentScreen)}
    </Container></>

}
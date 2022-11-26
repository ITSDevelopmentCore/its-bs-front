import React from "react"
import * as ReactDOM from 'react-dom/client';

/* PAGE: Stylesheets */
import style from "../css/index.scss"

import Main from './Main'


initialize();


function initialize()
{
    let rootElement = document.getElementById("root_main");
    let reactRoot = ReactDOM.createRoot(rootElement);
    reactRoot.render(
            <Main></Main>
    )
}



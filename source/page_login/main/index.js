import React from "react"
import * as ReactDOM from 'react-dom/client';

import Login from "../components/Login.js"

/* PAGE: Stylesheets */
import style from "../css/index.css"

initialize();


function initialize()
{
    let rootElement = document.getElementById("root_login");
    let reactRoot = ReactDOM.createRoot(rootElement);
    reactRoot.render(
        <Login></Login>
    )
}



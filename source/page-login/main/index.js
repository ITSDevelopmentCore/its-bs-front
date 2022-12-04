import React from "react"
import * as ReactDOM from 'react-dom/client';

import PageLogin from "../components/PageLogin.js"

/* PAGE: Stylesheets */
import style from "../css/index.scss"


let rootElement = document.getElementById("root_login");
let reactRoot = ReactDOM.createRoot(rootElement);

reactRoot.render(<PageLogin/>)


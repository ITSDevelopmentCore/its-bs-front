import * as React from 'react';

// React Components
import { Container } from '@mui/material';

// Project utils
import Navigator from '../../lib/navigation/Navigator';


export default function MainWindow(props) {

    return<>
    <Navigator currentWindowTag={props.currentWindowTag}>

    </Navigator>
    </>
}

import React from "react";

import WindowUserBots from '../../page_main/components/windows/WindowUserBots';
import WindowBilling from '../../page_main/components/windows/WindowBilling';
import WindowEditor from '../../page_main/components/windows/WindowEditor';
import WindowUser from '../../page_main/components/windows/WindowUser';
import Window404 from '../../page_main/components/windows/windows_errors/Window404';

import { Box } from '@mui/material';


export const WINDOW_TAG_EDITOR = "WindowEditor";
export const WINDOW_TAG_USER = "WindowUser";
export const WINDOW_TAG_BILLING = "WindowBilling";
export const WINDOW_TAG_USER_BOTS = "WindowUserBots";


export default class Navigator extends React.Component {

    state = {
        currentWindowTag: undefined,
    }

    constructor(props) {
        super(props);
        this.state.currentWindowTag = props.currentWindowTag;
    }

    render() {
        return this.getWindowByTag(this.state.currentWindowTag)
    }
    
    componentDidUpdate(prevProps) {
        // Популярный пример (не забудьте сравнить пропсы):
        if (this.props.currentWindowTag !== prevProps.currentWindowTag) {
            this.setState({
                currentWindowTag: this.props.currentWindowTag,
            })
                }
      }

    getWindowByTag(windowTag){
        switch (windowTag) {
            case WINDOW_TAG_USER_BOTS: {
                return <WindowUserBots></WindowUserBots>;
            }
            case WINDOW_TAG_BILLING: {
                return (<WindowBilling></WindowBilling>);
            }
            case WINDOW_TAG_EDITOR: {
                return <WindowEditor></WindowEditor>;
            }
            case WINDOW_TAG_USER: {
                return <WindowUser></WindowUser>;
            }
            default: {
                return <Window404></Window404>
            }

        }
    }

}



import React from "react";

import WindowUserBots from './windows/WindowUserBots';
import WindowBilling from './windows/WindowBilling';
import WindowEditor from './windows/WindowEditor';
import WindowUser from './windows/WindowUser';
import Window404 from './windows/windows_errors/Window404';

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
        if (this.props.currentWindowTag !== prevProps.currentWindowTag) {
            this.setState({
                currentWindowTag: this.props.currentWindowTag,
            })
        }
    }

    getWindowByTag(windowTag) {
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



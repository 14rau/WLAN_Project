import * as React from "react";
import { AppState } from '../AppState';
import { Pages } from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { observer, inject } from 'mobx-react';

interface IArticleProps{
    articleNr: number;
    page: Pages;
    appState?: AppState;
    style?: React.CSSProperties;
    className?: string;
}

@inject("appState")
@observer
export class Article extends React.Component<IArticleProps>{


    private selectIcon() {
        let {appState, page, articleNr} = this.props;
        return <FontAwesomeIcon
                    icon={faCheck}
                    color={appState.todoState[page][articleNr] ? "green" : "#ddd"}
                />
    }

    public render() {
        return (
            <div className={["customCard", this.props.className].join(" ")} style={{...this.props.style, position: "relative"}}>
                <div
                    style={{position: "absolute", right: 1, top: 1, margin: "5px"}}
                    onClick={() => this.props.appState.toggleValidation(this.props.page, this.props.articleNr)}
                >
                    {this.selectIcon()}
                </div>
                {this.props.children}
            </div>
        )
    }
}
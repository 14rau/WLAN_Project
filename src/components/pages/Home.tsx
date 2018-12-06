import * as React from "react";
import { Card } from "@blueprintjs/core";
import { AppState } from "../../AppState";

interface IHomeProps {
    appState?: AppState;
}

export class Home extends React.Component<IHomeProps>{
    public render() {
        return(
            <Card title="Welcome">
                TTTTT
            </Card>
        );
    }
}
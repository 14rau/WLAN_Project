import * as React from "react";
import { Card } from "@blueprintjs/core";
import { Definition } from "./Definitions";
import { AppState } from "../../AppState";

interface IHomeProps {
    appState?: AppState;
}

export class Home extends React.Component<IHomeProps>{
    public render() {
        return(
            <Card title="Welcome">
                Welcome on our Startpage <Definition defi="QAM">QAM</Definition>
            </Card>
        );
    }
}
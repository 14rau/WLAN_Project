import * as React from "react";
import { observer, inject } from "mobx-react";
import autobind from "autobind-decorator";
import { AppState } from "../../AppState";

export class DefinitionManager{
    public static initiated = false;
    public static lib: Map<string, any>;
    public static init() {
        DefinitionManager.lib = new Map();
        DefinitionManager.initiated = true;
    }
}

interface IDefinitionTableProps {
    appState?: AppState;
}

@inject("appState")
@observer
export class DefinitionTable extends React.Component<IDefinitionTableProps>{

    private table: HTMLElement;

    @autobind
    public scrollTo(id: string) {
        this.table.scrollTo({
            behavior: "smooth",
            top: (document as any).getElementById(id).offsetTop
        })
    }

    public render() {
        return(
            <div style={{
                position: "absolute",
                width: "600px",
                height: "50%",
                right: 1,
                background: "white",
                border: "1px solid #ddd",
                overflow: "auto"
            }} ref={e => this.table = e}>
                <table className="bp3-html-table .modifier">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Definition</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.appState.definitions.map(e => {
                            return(
                                e
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}


interface IDefinitionProps{
    children: React.ReactText;
    defi: string;
    appState?: AppState;
}

@inject("appState")
export class Definition extends React.Component<IDefinitionProps>{
    public render() {
        return <a onClick={this.onClick}>
            <i>{this.props.children}</i>
        </a>
    }

    @autobind
    private async onClick(e: any) {
        if(!this.props.appState.dictVisible) {
            this.props.appState.toggleDict();
        }
        await setTimeout(() => {}, 1);
        (this.props.appState.defTable as any).wrappedInstance.scrollTo(`${this.props.appState.dict.get(this.props.defi)}`)
    }
}
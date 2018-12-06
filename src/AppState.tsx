import { observable, action } from "mobx";
import * as React from "react";
import { DefinitionTable } from "./components/pages/Definitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export class AppState{
    @observable public todoState;
    @observable public dictVisible = false;
    @observable public todoVisible = false;
    @observable public currentPageName = "";
    @observable public definitions = [];
    public defTable: DefinitionTable;
    
    public dict: Map<string, string>;
    @observable currentPageId: number = 0;

    constructor() {
        this.dict = new Map();
        if(localStorage.getItem("TD")) {
            this.todoState = JSON.parse(localStorage.getItem("TD"));
        } else {
            let temp = [false, false, false, false, false];
            localStorage.setItem("TD", JSON.stringify(temp));
        }
    }

    public setDeftable(table: DefinitionTable) {
        this.defTable = table;
    }

    @action
    public onChangeTodo(id: number, value: boolean) {
        this.todoState[id] = value;
    }

    @action
    public toggleDict() {
        this.dictVisible = !this.dictVisible;
    }

    @action
    public toggleTodo() {
        this.todoVisible = !this.todoVisible;
    }

    @action
    public setCurrentPage(name: string, id: number) {
        if(id !== 0) this.onChangeTodo(this.currentPageId - 1, true);
        this.currentPageName = name;
        this.currentPageId = id;
    }

    @action
    public addDefinition(name: string, definition: string, url: string) {
        let id = Math.random().toString(36).substring(7);
        (this.definitions as any).push(<tr id={`${name}_tr_def${id}`}>
            <td><b>{name}</b></td>
            <td className="bp3-text-small">{definition.split("\n").map(e => <p>{e}</p>)}</td>
            <td><a target="blank" href={url}>Mehr <FontAwesomeIcon icon={faExternalLinkAlt}/></a></td>
        </tr>);

        this.dict.set(
            name,
            `${name}_tr_def${id}`
        );

    }
}
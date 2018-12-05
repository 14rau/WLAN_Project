import { observable, action } from "mobx";
import * as React from "react";
import { DefinitionTable } from "./components/pages/Definitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export class AppState{
    @observable public dictVisible = false;
    @observable public currentPage = "";
    @observable public definitions = [];
    public defTable: DefinitionTable;
    
    public dict: Map<string, string>;

    constructor() {
        this.dict = new Map();
    }

    public setDeftable(table: DefinitionTable) {
        this.defTable = table;
    }

    @action
    public toggleDict() {
        this.dictVisible = !this.dictVisible;
    }

    @action
    public setCurrentPage(name: string) {
        this.currentPage = name;
    }

    @action
    public addDefinition(name: string, definition: string, url: string) {
        let id = Math.random().toString(36).substring(7);
        (this.definitions as any).push(<tr id={`${name}_tr_def${id}`}>
            <td><b>{name}</b></td>
            <td className="bp3-text-small">{definition}</td>
            <td><a target="blank" href={url}>Mehr <FontAwesomeIcon icon={faExternalLinkAlt}/></a></td>
        </tr>);

        this.dict.set(
            name,
            `${name}_tr_def${id}`
        );

    }
}
import { observable, action, toJS } from "mobx";
import * as React from "react";
import { DefinitionTable } from "./components/pages/Definitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { Pages } from './App';
import { faClock, faCheckCircle } from '@fortawesome/free-regular-svg-icons';



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
        this.loadPagestate()
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
    public toggleTodo() {
        this.todoVisible = !this.todoVisible;
    }

    @action
    public setCurrentPage(name: string, id: number) {

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

    @action
    public loadPagestate() {
        if(localStorage.getItem("TODO")) {
            this.todoState = JSON.parse(localStorage.getItem("TODO"));
        } else {
            this.todoState = {
                [Pages.Merkmal]: [
                    false,
                    false
                ], 
                [Pages.Grenzen]: [
                    false,
                    false,
                    false
                ],
                [Pages.Konfiguration]: [
                    false,
                    false,
                    false
                ],
                [Pages.Beispielszenario]: [
                    false,
                    false,
                    false
                ]
            }
            localStorage.setItem("TODO", JSON.stringify(this.todoState));
        }
    }

    public validatePagestate(page: Pages) {
        console.log(page, toJS(this.todoState));
        if(this.todoState[page].includes(false) && this.todoState[page].includes(true)) return <FontAwesomeIcon icon={faClock} color="tomato"/>
        if(!this.todoState[page].includes(false)) return <FontAwesomeIcon icon={faCheckCircle} color="green"/>
        if(!this.todoState[page].includes(true)) return <></>;
    }

    public toggleValidation(page: Pages, articleNr: number) {
        this.todoState[page][articleNr] = !this.todoState[page][articleNr];
        localStorage.setItem("TODO", JSON.stringify(this.todoState));
    }
}
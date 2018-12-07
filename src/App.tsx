import * as React from "react";
import { observer, Provider } from "mobx-react";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faBars, faWifi, faBook } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Tab, Tabs, Navbar, Alignment, Button } from "@blueprintjs/core";
import { Home } from "./components/pages/Home";
import { Beispielszenario } from "./components/pages/Beispielszenario";
import { Merkmale } from "./components/pages/Merkmale";
import { Grenzen } from "./components/pages/Grenzen";
import { Konfiguration } from "./components/pages/Konfiguration";
import { DefinitionTable } from "./components/pages/Definitions";
import { definitions } from "./def";
import { AppState } from "./AppState";
// import { TodoPage } from './components/pages/Todo/Todos';



export enum Pages{
    Startpage=0,
    Merkmal=1,
    Grenzen=2,
    Konfiguration=3,
    Beispielszenario=4 // dont have to define, when first is initiated as number, it will count up
}

library.add(faBars, faWifi)

@observer
class App extends React.Component{
    // @observable private show = true;
    private appState: AppState;

    constructor(props: any) {
        super(props);
        this.appState = new AppState();
    }

    public render() {

        // select page
        let page;
        switch(this.appState.currentPageId) {
            case Pages.Startpage: page = <Home/>; break;
            case Pages.Beispielszenario: page = <Beispielszenario/>; break;
            case Pages.Merkmal: page = <Merkmale/>; break;
            case Pages.Grenzen: page = <Grenzen/>; break;
            case Pages.Konfiguration: page = <Konfiguration/>; break;
            default: page = "Err"
        }
        return(
            
                <div style={{display: "flex", flexDirection: "column", width: "100%", height:"100%", flex: "0 0 100%"}}>
                    <Navbar>
                        <Navbar.Group align={Alignment.LEFT}>
                            <Navbar.Heading> <FontAwesomeIcon icon={faWifi}/> </Navbar.Heading>
                            <Navbar.Divider />
                            IT8x Lernpage - {this.appState.currentPageName}
                        </Navbar.Group>
                        <Navbar.Group align={Alignment.RIGHT}>
                            <Button icon={<FontAwesomeIcon icon={faBook}/>} onClick={() => this.appState.toggleDict()}> Definitionen </Button>
                        </Navbar.Group>
                    </Navbar>
                    <div style={{display: "flex", flexDirection: "row", width: "100%", flex: "0 0 100%", position: "relative", background: "white"}}>
                        {/* since this page is static, we won"t do any cool shit and only use dirty workarounds. Cuz we want to be finised early */}
                        <Tabs id="TabsExample" selectedTabId={this.appState.currentPageId} vertical onChange={(e) => this.appState.setCurrentPage(Pages[e], Number.parseInt(e.toString()))}>
                            <Tab id={-1} disabled title="WLAN" panel={<div />} />
                            <Tab id={Pages.Startpage} title="Startseite" panel={<div />} />
                            <Tab id={Pages.Merkmal} title={<span>Merkmale {this.appState.validatePagestate(Pages.Merkmal)}</span>} panel={<div />} />
                            <Tab id={Pages.Grenzen} title={<span>Grenzen {this.appState.validatePagestate(Pages.Grenzen)}</span>} panel={<div />} />
                            <Tab id={Pages.Konfiguration} title={<span>Konfiguration {this.appState.validatePagestate(Pages.Konfiguration)}</span>} panel={<div />} />
                            <Tab id={Pages.Beispielszenario} title={<span>Beispielszenario {this.appState.validatePagestate(Pages.Beispielszenario)}</span>} panel={<div />} />
                            <Tabs.Expander />
                        </Tabs>
                        
                        <div style={{background: "rgba(138, 155, 168, 0.15)", overflow: "auto", height: "100%", width: "100%"}}>
                            <Provider appState={this.appState}>
                                {page}
                            </Provider>
                        </div>

                        {this.appState.dictVisible && <Provider appState={this.appState}>
                            <DefinitionTable ref={(e: any) => this.appState.setDeftable(e)}/>
                        </Provider>}

                        
                    </div>
                </div>
        )
    }

    public componentDidMount() {
        definitions.forEach((e: any) => {
            this.appState.addDefinition(e.name, e.definition, e.url);
        })
    }
}

export default App;
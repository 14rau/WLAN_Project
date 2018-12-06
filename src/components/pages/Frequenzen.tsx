import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Timeline, TimelineEvent } from '../ext';
import { Row, Col } from "react-bootstrap";
import { Definition } from './Definitions';

const timeline = [{
    name: "IEEE 802.11",
    year: "1997",
    text: "Freq: 2,4 GHz, max Datenrate: 2 MBit/s"
},{
    name: "IEEE 802.11b",
    year: "1999",
    text: "Freq: 2,4 GHz, max Datenrate: 11 MBit/s"
},{
    name: "IEEE 802.11g",
    year: "2003",
    text: "Freq: 2,4 GHz, max Datenrate: 54 MBit/s"
},{
    name: "IEEE 802.11n",
    year: "2009",
    text: "Freq: 2,4 GHz, max Datenrate: 600 MBit/s"
},{
    name: "IEEE 802.11ad WiGig",
    year: "2012",
    text: "Freq: 60 GHz, max Datenrate: 4,8 GBit/s"
},{
    name: "IEEE 802.11ac Wave 1",
    year: "2013",
    text: "???"
}, {
    name: "IEEE 802.11ac Wave 2",
    year: "2015",
    text: "Freq: 2,4 GHz, max Datenrate: 2 MBit/s"
}, {
    name: "IEEE 802.11ah sub-1 GHz",
    year: "2016",
    text: "Freq: 2,4 GHz, max Datenrate: 2 MBit/s"
},{
    name: "IEEE 802.11ay",
    year: "2018",
    text: "Freq: 60 GHz, max Datenrate: 176 GBit/s"
},];
/*
1997 : IEEE 802.11
Freq: 2,4 GHz
max Datenrate: 2 MBit/s

1999 : IEEE 802.11b
Freq: 2,4 GHz
max Datenrate: 11 MBit/s

2003 : IEEE 802.11g
Freq: 2,4 GHz
max Datenrate: 54 MBit/s

2009 : IEEE 802.11n
Freq: 2,4 / 5 GHz
max Datenrate: 600 MBit/s

2012 : IEEE 802.11ad WiGig
Freq: 60 GHz
max Datenrate: 4,6 GBit/s

2013 : IEEE 802.11ac Wave 1
2015 : IEEE 802.11ac Wave 2
Freq: 2,4 GHz
max Datenrate: 2 MBit/s

2016 : IEEE 802.11 ah sub-1 GHz
Freq: 5 GHz
max Datenrate: 54 MBit/s

2018 : IEEE 802.11ay
Freq: 60 GHz
max Datenrate: 176 GBit/s

*/

export class Frequenzen extends React.Component{

    private timelineGenerator() {
        return timeline.map(e =>                                     <TimelineEvent
            iconColor={e.year === "2018" ? "green" : "steelblue"}
            title={<span style={{fontWeight: e.year === "2018" ? "bold": undefined}}>
                    {e.name}
                </span>}
            createdAt={e.year}
            icon={<FontAwesomeIcon icon={faChevronRight}/>}
        >
            <span style={{fontWeight: e.year === "2018" ? "bold": undefined}}>
                {e.text}
            </span>
        </TimelineEvent>).reverse()
    }

    public render() {
        return(
            <>
                <Row>
                    <Col xs={12}>
                        <div className="customCard">
                            <h3>Frequenzen und Standards</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} style={{paddingTop: "8px"}}>
                        <div className="customCard">
                            <div style={{overflow: "auto", height: "500px"}}>
                                <Timeline
                                    lineColor="steelblue"
                                >
                                   {this.timelineGenerator()}
                                </Timeline>
                                <Definition defi="Standarts Kürzel">Hier</Definition> mehr
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} style={{paddingTop: "8px"}}>
                        <div className="customCard" style={{marginTop: "8px"}}>
                            <h4>Was ist WLAN?</h4>
                            <p>WLAN (Wireless Local Area Network) ist ein drahtloses Netzwerk, welches über Funk kommuniziert.
                            Es handelt sich hierbei um ein Netzwerk, welches mithilfe von Mikrowellen kommuniziert.
                            </p>
                            Der Standard IEEE 802.11b und g nutzen das 2,4 GHz-Verfahren. In Europa teilt sich dieser Frequenzbereich in 13 Kanäle ein, von denen drei überlappungsfrei nutzbar sind. Die Kanalbandbreite beträgt 20 MHz und die maximale Sendeleistung liegt bei 100 mW. (veraltet)
                            Der Standard IEEE 802.11ac basiert auf dem 5-GHz-Verfahren und überträgt bis zu 1300 Mbit/s.
                            Hierbei gibt es 19 überlappungsfrei nutzbare Kanäle. Es ist eine Sendeleistung von bis zu 1000 mW erlaubt.
                        </div>
                        <div className="customCard" style={{marginTop: "8px"}}>
                            <h4>WLAN-Netzwerke</h4>
                                <p>Grundsätzlich kann in drei verschiedene Konfigurationsmöglichkeiten unterschieden werden.</p>
                            <ul>
                                <li>Independent (Ad-hoc-)WLAN</li>
                                <li>Infrastructure WLAN</li>
                                <li>Wireless Distribution System</li>
                            </ul>
                            <p>
                                <i>Independent WLAN</i> arbeiten im Peer-to-Peer-Betrieb. Jeder Rechner ist mit einer WLAN-Karte ist in diesem Netzwerk gleichberechtigt und hat die Möglichkeit, Daten zu den jeweils anderen Rechnern zu senden. Ein einzelner Rechner kann WLAN-Verbindungen zu den Partnern herstellen, die in Funkreichweite sind.
                            </p>
                            <p>
                                <b>Vorteil</b>: Wenig bis keine Konfiguration benötigt.
                            </p>
                            <p>
                                <b>Nachteil</b>: Kein Zugriff auf freigegebene Ressourcen, die nicht auf WLAN-Rechnern liegen.
                            </p>
                            <p>
                                <i>Infrastructure WLAN</i> verfügen über eine weitere Komponente. Zusätzlich zu den WLAN-Karten in den Rechnern, gibt es einen Access Point (AP). Diese erweitern die Erreichbarkeit des WLAN-Netzwerkes. Verbindungen der WLAN-Clients lassen sich nun über den Access Point ermöglichen. Der Access Point selbst besitzt zusätzlich die Möglichkeit sich mit dem Netzwerk per kabelgebundenes Ethernet-Netzwerkinterface mit dem LAN zu verbinden. Ein Access Point realisiert eine Layer2-Verbindung zwischen den Protokollen IEEE 802.3 (Ethernet) und IEEE802.11 (WLAN).
                            </p>
                            <p>
                                <b>Vorteil</b>: Über den Access Point sind die WLAN-Clients somit in der Lage, auf freigegebene Ressourcen im gesamten Netzwerk zuzugreifen. Erweiterbarkeit des Bereiches in dem das WLAN erreichbar ist.
                            </p>
                            <p>
                                <b>Nachteil</b>: Konfiguration der Frequenzkanäle der einzelnen Access-Points benötigt, sodass es nicht zur Kollision kommt.
                            </p>
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}
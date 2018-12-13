import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TimelineEvent, Timeline } from '../ext';
import { Row, Col, Grid } from "react-bootstrap"
import { Article } from '../Article';
import { Pages } from '../../App';
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
    name: <Definition defi="IEEE 802.11ay">IEEE 802.11ay</Definition>,
    year: "2018",
    text: "Freq: 60 GHz, max Datenrate: 20 GBit/s"
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

export class Merkmale extends React.Component{

    private timelineGenerator() {
        return timeline.map(e => <TimelineEvent
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
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div className="customCard">
                            <h3>Merkmale von WLAN</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} style={{paddingTop: "8px"}}>
                        <div className="customCard">
                            <div style={{overflow: "auto", height: "568px"}}>
                                <Timeline
                                    lineColor="steelblue"
                                >
                                   {this.timelineGenerator()}
                                </Timeline>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} style={{paddingTop: "8px"}}>
                        <Article articleNr={0} page={Pages.Merkmal} style={{fontSize: "14px"}}>
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
                        </Article>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        
                    </Col>
                    <Col xs={6}>
                        <Article articleNr={1} page={Pages.Merkmal} style={{fontSize: "14px", marginTop: "8px"}}>
                            <h4>Genutzte Frequenzen und Modulationsverfahren</h4>
                            <h5>Frequenzen</h5>
                            <dl>
                                <dt>2,412 – 2,484 GHz</dt>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Aufgeteilt in 13 Frequenzkanäle mit jeweils 5MHz</dd>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Kanalbandbreite 20MHz (4 zusammengefasste Kanäle)</dd>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Kanal 1, 6, 11 vollständig überlappungsfrei</dd>
                                <dt>4,920 – 5 GHz</dt>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Nur in Japan zulässig</dd>
                                <dt>5 – 5,1 GHz</dt>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Anwendung im Öffentlichen Sicherheitssektor</dd>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Kanalbreite 5 MHz</dd>
                                <dt>UNII-1 (5,150 – 5,250 GHz)</dt>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Indoor Verwendung</dd>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Nur jeder zweite Kanal (10 MHz) wird verwendet, da sonst 20 MHz nicht überlappungsfrei wären</dd>
                                <dt>UNII-2 (5,250 - 5,350 GHz)</dt>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Indoor verwendung</dd>
                                <dt>UNII-2 Extended (5,725 - 5,850 HGz)</dt>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Teilweise Radarbereich</dd>
                                <dt>Upper-ISM (5,725 - 5,850)</dt>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>In den USA, Australien und einigen weiteren Ländern erlaubt</dd>
                                <dt>57 - 66 GHz</dt>
                                    <dd>&nbsp;&nbsp;<FontAwesomeIcon icon={faChevronRight}/>Kanalbreite 2 GHz</dd>
                            </dl>
                            <h5>Wellenlänge eines Signals</h5>
                            <p>Die Wellenlänge <i>λ</i> und die Frequenz <i>F</i> hängen unmittelbar zusammen.
                            <i>λ</i> ergibt sich aus der Ausbreitungsgeschwindigkeit durch <i>F</i>. Sie liegt in Abhängigkeit zu der relativen Dielektrizitätskonstante <i>ε</i>. <i>λ</i> ist in einem Kabel kürzer als in der Luft oder im Vakuum (<Definition defi="Lichtgeschwindigkeit" >c</Definition>).</p>

                            <p>Je höher <i>F</i>, desto kürzer <i>λ</i></p>
                            <p>Je länger <i>F</i>, desto niedriger <i>λ</i></p>

                            <p>Kurze Wellenlängen haben größere Schwierigkeiten in Gebäude einzudringen und geringere Reichweiten als lange Wellenlängen, sind aber wiederum schneller in ihrer Übertragungsgeschwindigkeit.</p>
                            <p>Bei größeren Distanzen wird meist eine Wellenlänge von 2,4 GHz verwendet. Als Modulationsstandart wird aktuell das <Definition defi="OFDM">OFDM</Definition> Verfahren genutzt.</p>
                        </Article>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
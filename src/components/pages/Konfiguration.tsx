import * as React from "react";
import {Row, Col, Grid} from "react-bootstrap";
import { Abbildung } from '../Abbildung';
import { Article } from '../Article';
import { Pages } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export class Konfiguration extends React.Component{
    public render() {
        return(
            <Grid>
                <Row>
                    <Col xs={12}>
                        <div className="customCard">
                            <h3>Beispieleinrichtung eines Fritzbox-Routers</h3>
                        </div>
                    </Col>  
                </Row>
                <Row>
                    <Col xs={6}>
                        <Abbildung src="https://cdn.discordapp.com/attachments/461441139078201355/520533338826473483/bsp1.jpg" name="Abb. 1" />
                        
                        <Abbildung name="Abb. 2" src="https://cdn.discordapp.com/attachments/461441139078201355/520533343452921896/bsp2.jpg"/>
                    </Col>
                    <Col xs={6}>
                        <Article page={Pages.Konfiguration} articleNr={0}>
                            <h5>Schritt 1</h5>
                            <h4>WLAN einschalten</h4>
                            <ul>
                                <li>entweder <i>fritz.box</i> oder die IP-Adresse <i>192.168.178.1</i> in die Adresszeile eines Webbrowsers eingeben und sich mit deinem Passwort anmelden</li>
                                <li>Wechseln zu den erweiterten Einstellungen</li>
                            </ul>
                            In der linken Navigationsleiste klickst du auf <i>WLAN</i>. Im Bereich <i>Funknetz</i> kannst du etwa bei den Modellen 7580 , 7490 und 6490 das WLAN für das 2,4- und 5-GHz-Frequenzband getrennt einschalten und einen beliebigen Namen vergeben. 
                        </Article>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}><Abbildung name="Abb. 3" src="https://media.discordapp.net/attachments/461441139078201355/522001255141474314/Screenshot_2018-12-11-11-40-28-1.png"/></Col>
                    <Col xs={6}>
                        <Article articleNr={1} page={Pages.Konfiguration}>
                            <h5>Schritt 2</h5>
                            <h4>WLAN-Geräte verbinden</h4>
                            <ul>
                                <li>Unter Windows 10: <i>Einstellungen</i> <FontAwesomeIcon icon={faArrowRight}/> <i>Netzwerk und Internet</i> <FontAwesomeIcon icon={faArrowRight}/>  <i>WLAN</i></li>
                                <li>WLAN Namen auswählen <FontAwesomeIcon icon={faArrowRight}/> <i>verbinden</i></li>
                                <li>Netzwerksicherheitsschlüssel eingeben</li>
                            </ul>
                        </Article>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}><Abbildung name="Abb. 4" style={{width: "100%"}} src="https://cdn.discordapp.com/attachments/461441139078201355/520533348914036736/bsp3.jpg"/></Col>
                    <Col xs={6}>
                        <Article page={Pages.Konfiguration} articleNr={2}>
                            <h5>Schritt 3</h5>
                            <h4>Schnellsten WLAN-Kanal wählen</h4>
                            Die Fritzbox ermittelt zwar in der Voreinstellung automatisch den am wenigsten genutzten Kanal und stellt sich darauf ein (einmalig beim Aktivieren der WLAN-Funktion)
                            <ul>
                                <li>Funkkanal-Einstellungen <FontAwesomeIcon icon={faArrowRight}/> <i>Autokanal aktualisieren</i> <FontAwesomeIcon icon={faArrowRight}/> ggf. wechsel auf einen besseren Kanal </li>
                            </ul>
                        </Article>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}><Abbildung name="Abb. 5" src="https://media.discordapp.net/attachments/461441139078201355/520533350725713920/bsp4.jpg"/></Col>
                    <Col xs={6}>
                        <Article articleNr={3} page={Pages.Konfiguration}>
                            <h5>Schritt 4</h5>
                            <h4>Mit oder ohne MAC-Filter?</h4>
                            Die Fritzbox bietet die Möglichkeit, den Zugang zum Netzwerk auf Geräte mit bestimmten MAC-Adressen zu beschränken.
                            Das Setzen eines MAC-Filters bietet einen Schutz vor Benutzern ohne technisches Spezialwissen.
                            <ul>
                                <li>WLAN <FontAwesomeIcon icon={faArrowRight}/> Sicherheit <FontAwesomeIcon icon={faArrowRight}/> WLAN-Zugang auf die bekannten WLAN-Geräte beschränken <FontAwesomeIcon icon={faArrowRight}/> WLAN-Gerät hinzufügen <FontAwesomeIcon icon={faArrowRight}/> MAC-Adresse eingeben</li>
                            </ul>
                            Allerdings ist es möglich, dass ein Angreifer seine eigene MAC-Adresse ändern kann. Sollte also ein Angreifer an eine MAC-Adresse innerhalb des Netzwerkes kommen, könnte dieser den MAC-Filter umgehen. Daher darf der MAC-Adressen Filter nie als einzige Sicherheitsbarriere verwendet werden.
                        </Article>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}><Abbildung name="Abb. 6" src="https://cdn.discordapp.com/attachments/461441139078201355/520533352164491265/bsp5.jpg"/></Col>
                    <Col xs={6}>
                        <Article page={Pages.Konfiguration} articleNr={4}>
                            <h5>Schritt 5</h5>
                            <h4>WLAN-Abdeckung messen</h4>
                            <ul>
                                <li>Android: FRITZ!App WLAN <FontAwesomeIcon icon={faArrowRight}/> Mein WLAN <FontAwesomeIcon icon={faArrowRight}/> Verbinden und Umgebung <FontAwesomeIcon icon={faArrowRight}/> WLAN messen <FontAwesomeIcon icon={faArrowRight}/> Netzwerkanalyse </li>
                                <li>Herausfinden, an welchen Stellen deiner Wohnung das Signal gut, schwach oder fast überhaupt nicht messbar ist</li>
                            </ul>
                        </Article>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <div className="customCard">
                            <a href="https://www.pcwelt.de/ratgeber/6-Schritte-zur-optimalen-WLAN-Konfiguration-10053040.html" target="blank">Quellenangabe</a>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
import * as React from "react";
import { Row, Col} from "react-bootstrap";
import { Article } from '../Article';
import { Pages } from '../../App';

export class Grenzen extends React.Component{
    public render() {
        return(
            <>
                <Row>
                    <Col xs={12}>
                        <div className="customCard">
                            <h3>Grenzen von WLAN</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} style={{paddingTop: "8px"}}>
                        <img
                            style={{
                                width: "100%",
                                background: "white",
                                padding: "12px"
                            }}
                            src="https://media.discordapp.net/attachments/461441139078201355/520203749759647754/Wlan-Signal.png"
                        />
                    </Col>
                    <Col xs={6} style={{paddingTop: "8px"}}>
                        <Article page={Pages.Grenzen} articleNr={0}>
                            <h5>Liste von Grenzen</h5>
                            <ul>
                                <li>Router ist in der Lage, das WLAN etwa 50 bis 100 Meter weit auszustrahlen (indoor).</li>
                                <li>Datenrate wird bei weiterer Entfernung schlechter.</li>
                                <li>Verschiedene Faktoren (Wände, Mikrowellen oder Fernseher) können die Reichweite beeinträchtigen.</li>
                                <li>Reichweite kann bei verschiedenen Routern variieren</li>
                                <li>Reichweite kann durch WLAN-Repeater erweitert werden</li>
                            </ul>
                            <h5>Nachteile für Repeater-Verfahren wären</h5>
                            <ul>
                                <li>Für die Verbindung zwischen Basis und Repeater wird dieselbe Funkverbindung verwendet wie für das eigentliche WLAN</li>
                                <li>Ausbremsung des gesamten Netzwerkes</li>
                                <li>Bei Mobilgeräten funktioniert die Übergabe zwischen Basis und Repeater häufig nicht ordentlich</li>
                                <li>Hat sich ein Android-Gerät einmal mit dem Repeater verbunden, bleibt das meist so, auch wenn es sich mittlerweile in der Nähe der Basis-Station befindet</li>
                            </ul>
                        </Article>
                    </Col>
                </Row>
            </>

        )
    }
}
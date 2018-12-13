import * as React from "react";
import { Row, Col, Grid} from "react-bootstrap"
import { AppState } from "../../AppState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

interface IHomeProps {
    appState?: AppState;
}

export class Home extends React.Component<IHomeProps>{
    public render() {
        return(
            <Grid>
                <Col xs={3}>
                    <div style={{marginTop: "50px", padding: "40px", background: "white"}}>
                        <FontAwesomeIcon size="10x" icon={faWifi}/>
                    </div>
                </Col>
                <Col xs={9}>
                    <Row>
                        <Col xs={12}>
                            <div className="customCard">
                                <h3>Hallo</h3>
                                Auf dieser Webseite kannst du deinen Lese Status tracken. Hast du einen Artikel gelesen, kannst du oben rechts auf den Hacken klicken und der Artikel wird als gelesen markiert. Hast du alle Artikel gelesen, erscheint ein grüner Hacken in der Sidebar der aussagt, dass du die gesammte Seite gelesen hast. Damit hast du deinen eigenen Fortschritt auf dieser Seite immer im Blick.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <div className="customCard">
                                <h4>Was ist WLAN?</h4>
                                <p>WLAN (Wireless Local Area Network) ist ein drahtloses Netzwerk, welches über Funk kommuniziert.
                                Es handelt sich hierbei um ein Netzwerk, welches mithilfe von Mikrowellen kommuniziert.
                                </p>
                                Der Standard IEEE 802.11b und g nutzen das 2,4 GHz-Verfahren. In Europa teilt sich dieser Frequenzbereich in 13 Kanäle ein, von denen drei überlappungsfrei nutzbar sind. Die Kanalbandbreite beträgt 20 MHz und die maximale Sendeleistung liegt bei 100 mW. (veraltet)
                                Der Standard IEEE 802.11ac basiert auf dem 5-GHz-Verfahren und überträgt bis zu 1300 Mbit/s.
                                Hierbei gibt es 19 überlappungsfrei nutzbare Kanäle. Es ist eine Sendeleistung von bis zu 1000 mW erlaubt.
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Grid>
        );
    }
}
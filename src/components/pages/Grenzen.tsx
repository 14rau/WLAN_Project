import * as React from "react";
import { Row, Col} from "react-bootstrap";

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
                        <div className="customCard">
                            <p>We like WLAN</p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                        <div className="customCard" style={{marginTop: "8px"}}>
                            <p>We like WLAN</p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}
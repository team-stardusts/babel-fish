import React from "react";
import Greeting from "../component/Greeting";
import IntroCard from "../component/IntroCard";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <Container>
            <Row>
                <Col>
                    <Greeting />
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <div class="d-flex justify-content-around">
                    <IntroCard />
                    <IntroCard />
                    <IntroCard />
                    <IntroCard />
                </div>
            </Row>
        </Container>
    );
}

export default Home;

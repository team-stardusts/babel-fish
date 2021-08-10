import React from "react";
import Greeting from "../component/Greeting";
import IntroCard from "../component/IntroCard";
import routes from "./router";
import { Container, Row, Col, Image } from "react-bootstrap";

const contents = [
    {
        id: 1,
        route: routes.tutoring,
        title: "Tutoring",
        description:
            "This is sample description. Write here what you want to explain something.",
    },
    {
        id: 2,
        route: routes.trip,
        title: "Trip",
        description:
            "This is sample description. Write here what you want to explain something.",
    },
    {
        id: 3,
        route: routes.support,
        title: "Support",
        description:
            "This is sample description. Write here what you want to explain something.",
    },
    {
        id: 4,
        route: routes.interestings,
        title: "Interestings",
        description:
            "This is sample description. Write here what you want to explain something.",
    },
];

function Home() {
    return (
        <Container>
            <Row
                xs={1}
                md={2}
                className="g-4"
                style={{ marginTop: "45px", marginBottom: "90px" }}
            >
                <Col>
                    <Greeting />
                </Col>
                <Col className="d-flex justify-content-center">
                    <Image
                        src="data:image/jpeg;base64,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"
                        rounded
                    />
                </Col>
            </Row>
            <Row xs={2} md={4} className="g-4">
                {contents.map((content) => (
                    <IntroCard
                        key={content.id}
                        route={content.route}
                        title={content.title}
                        description={content.description}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default Home;

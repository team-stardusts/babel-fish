import React from "react";
import Greeting from "../component/Greeting";
import IntroCard from "../component/IntroCard";
import routes from "./router";
import { Container, Row, Col, Image } from "react-bootstrap";

const contents = [
    {
        id: 1,
        route: routes.tutoring,
        image: "https://post-phinf.pstatic.net/MjAyMDA0MDJfMTgz/MDAxNTg1ODEwNzgyOTgz.wPH8JhfZ42njnkvL5mzpi9ZYjPldNblR7AESlr3rvAAg.mrYIS8XBhxXpukwie5uCXaUVe29-YIr9cDwPVvRcMxsg.JPEG/%ED%95%9C%EA%B5%AD%EC%96%B4%EA%B3%BC%EC%99%B8%284%29.JPG?type=w1200",
        title: "Tutoring",
        description:
            "This is sample description. Write here what you want to explain something.",
    },
    {
        id: 2,
        route: routes.trip,
        image: "data:image/jpeg;base64,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",
        title: "Trip",
        description:
            "This is sample description. Write here what you want to explain something.",
    },
    {
        id: 3,
        route: routes.support,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqohnPs1NLYA5Xx9FKs1QVFFK2K92ilh5lOg&usqp=CAU",
        title: "Support",
        description:
            "This is sample description. Write here what you want to explain something.",
    },
    {
        id: 4,
        route: routes.interestings,
        image: "data:image/jpeg;base64,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",
        title: "Interestings",
        description:
            "This is sample description. Write here what you want to explain something.",
    },
];

function Home() {
    return (
        <Container style={{ maxWidth: 1100, minWidth: 300 }}>
            <Row
                xs={1}
                md={2}
                className="g-4"
                style={{ marginTop: "50px", marginBottom: "100px" }}
            >
                <Col>
                    <Greeting />
                </Col>
                <Col className="text-center">
                    <Image
                        className="shadow bg-body rounded"
                        src="data:image/jpeg;base64,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"
                        rounded
                        style={{ width: "55%" }}
                    />
                </Col>
            </Row>
            <Row xs={2} md={4} lg={4} className="g-4">
                {contents.map((content) => (
                    <IntroCard
                        key={content.id}
                        route={content.route}
                        image={content.image}
                        title={content.title}
                        description={content.description}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default Home;
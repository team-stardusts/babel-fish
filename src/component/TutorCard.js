import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button, Badge } from "react-bootstrap";

function TutorCard({ match, tutor }) {
    const { path } = match;
    const {
        id,
        image,
        nationality,
        koreanName,
        englishName,
        age,
        residence,
        coverage,
        degree,
        englishLevel,
        career,
        cost,
        intro,
        rating,
    } = tutor;

    return (
        <Col style={{ minWidth: 540 }}>
            <Card className="shadow bg-body rounded" style={{ maxWidth: 540 }}>
                <Row className="g-0">
                    <Col xs={4} md={4} className="position-relative">
                        <Card.Img
                            className="position-absolute top-50 start-50 translate-middle"
                            src={image}
                            alt={englishName}
                            title={englishName}
                            style={{
                                width: "95%",
                                height: "95%",
                            }}
                        />
                    </Col>
                    <Col xs={8} md={8}>
                        <Row>
                            <Col className="g-0" xs={7} md={7}>
                                <Card.Body
                                    className="d-grid gap-0"
                                    style={{ marginLeft: 10 }}
                                >
                                    <Card.Text className="mb-1 p-0">
                                        <b>{englishName}</b>
                                    </Card.Text>
                                    <Card.Text className="m-0 p-0">
                                        Live in{" "}
                                        <Badge bg="secondary">
                                            {residence}
                                        </Badge>
                                    </Card.Text>
                                    <Card.Text className="m-0 p-0">
                                        Korean:{" "}
                                        {nationality === "Korea" ? (
                                            <Badge bg="secondary">native</Badge>
                                        ) : (
                                            "?"
                                        )}
                                    </Card.Text>
                                    <Card.Text className="m-0 p-0">
                                        English:{" "}
                                        <Badge bg="secondary">
                                            {englishLevel}
                                        </Badge>
                                    </Card.Text>
                                    <Card.Text className="m-0 p-0">
                                        From{" "}
                                        <Badge bg="secondary">
                                            {degree.university}
                                        </Badge>{" "}
                                        university
                                    </Card.Text>
                                    <Card.Text className="m-0 p-0">
                                        {degree.graduateSchool}
                                    </Card.Text>
                                    <Card.Text className="mt-1 p-0">
                                        {intro}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                            <Col xs={5} md={5}>
                                <Card.Body>
                                    <Card.Text className="m-0 p-0">
                                        <b>{cost.oneHour}</b> KRW <br />
                                        Per hour
                                    </Card.Text>
                                    <Card.Text className="m-0 p-0">
                                        {rating}/5.0
                                    </Card.Text>
                                    <Link to={`${path}/${id}`}>
                                        <Button
                                            className="mt-5 w-100"
                                            variant="primary"
                                        >
                                            Detail
                                        </Button>
                                    </Link>
                                    <Link to={`${path}/${id}`}>
                                        <Button
                                            className="mt-1 w-100"
                                            variant="primary"
                                        >
                                            Book
                                        </Button>
                                    </Link>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Col>
    );
}

export default TutorCard;

import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

function IntroCard({ route, image, title, description }) {
    return (
        <Col>
            <Card
                className="shadow bg-body rounded"
                style={{ maxWidth: 240, marginBottom: 10 }}
            >
                <Card.Img
                    class="img-responsive"
                    variant="top"
                    src={image}
                    xs={3}
                    style={{ width: "auto", height: 150 }}
                />
                <Card.Body className="text-center">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-start">
                        {description.slice(0, 28)}...
                    </Card.Text>
                    <Link to={route}>
                        <Button variant="primary">Go!</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default IntroCard;

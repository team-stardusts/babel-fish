import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";

function IntroCard({ route, title, description }) {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description.slice(0, 28)}...</Card.Text>
                    <Link to={route}>
                        <Button variant="primary">Go!</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default IntroCard;

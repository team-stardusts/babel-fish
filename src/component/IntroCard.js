import React from "react";
import { Card, Button } from "react-bootstrap";

function IntroCard() {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Something</Card.Title>
                    <Card.Text>Something</Card.Text>
                    <Button variant="primary">Go!</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default IntroCard;

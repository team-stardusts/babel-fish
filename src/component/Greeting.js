import React from "react";
import { Container, Badge } from "react-bootstrap";

const fontStyle = {
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
};

function Greeting() {
    return (
        <Container
            style={{
                fontFamily: fontStyle.fontFamily,
                marginTop: "30px",
            }}
        >
            <h2>
                Wellcome to <Badge bg="primary">StarDust</Badge>
            </h2>
            <h2>Take some time to get</h2>
            <h2>to know about Korea!</h2>
            <p>
                Find someone who is your teacher.
                <br />
                He or She will introduce Korea to you
                <br />
                <span style={{ color: "#1f3a93" }}>
                    in a very attractive way.
                </span>
            </p>
        </Container>
    );
}

export default Greeting;

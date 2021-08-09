import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import router from "../routes/router";

const linkStyle = {
    textDecoration: "none",
    color: "#2e3131",
};

function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand>
                    <Nav.Link>
                        <Link to={router.home} style={linkStyle}>
                            StarDust
                        </Link>
                    </Nav.Link>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link>
                        <Link to={router.home} style={linkStyle}>
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={router.tutoring} style={linkStyle}>
                            Tutoring
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={router.trip} style={linkStyle}>
                            Trip
                        </Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;

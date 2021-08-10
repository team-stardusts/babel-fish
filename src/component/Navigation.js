import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import routes from "../routes/router";

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
                        <Link to={routes.home} style={linkStyle}>
                            StarDust
                        </Link>
                    </Nav.Link>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link>
                        <Link to={routes.home} style={linkStyle}>
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={routes.tutoring} style={linkStyle}>
                            Tutoring
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={routes.trip} style={linkStyle}>
                            Trip
                        </Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;

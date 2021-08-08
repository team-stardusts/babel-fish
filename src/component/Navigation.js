import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import router from "../routes/router";

function Navigation() {
    return (
        <Navbar bg="light" variant="light">
            <Container className="justify-content-between">
                <Navbar.Brand>
                    <Nav.Link href={router.home}>StarDust</Nav.Link>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href={router.home}>Home</Nav.Link>
                    <Nav.Link href={router.tutoring}>Tutoring</Nav.Link>
                    <Nav.Link href={router.trip}>Trip</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;

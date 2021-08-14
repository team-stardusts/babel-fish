import React from "react";
import tutors from "./tutors";
import TutorCard from "../../component/TutorCard";
import { Card, Container, Row, Col } from "react-bootstrap";

function TutorList({ match }) {
    return (
        <Container style={{ maxWidth: 1100, minWidth: 300 }}>
            <Row xs={1} md={2} lg={2} className="mt-5 g-3">
                {tutors.map((tutor) => (
                    <TutorCard key={tutor.id} tutor={tutor} match={match} />
                ))}
            </Row>
        </Container>
    );
}

export default TutorList;

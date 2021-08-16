import React from "react";
import tutors from "./tutors";
import TutorCard from "../../component/TutorCard";
import OffCanvasFilter from "../../component/TutorFilter";
import { Container, Row } from "react-bootstrap";

function TutorList({ match }) {
    return (
        <Container style={{ maxWidth: 1100, minWidth: 320 }}>
            <Row style={{ height: 200 }}>
                <div className="align-self-center text-center">
                    <h1>This is Tutoring!</h1>
                </div>
            </Row>
            <Row>
                <Row className="m-0 g-3">
                    <div className="mb-2 text-end">
                        <OffCanvasFilter />
                    </div>
                </Row>
                <Row
                    xs={1}
                    md={2}
                    className="m-0 g-3"
                    style={{ backgroundColor: "#e8ecf1" }}
                >
                    {tutors.map((tutor) => (
                        <TutorCard key={tutor.id} tutor={tutor} match={match} />
                    ))}
                </Row>
            </Row>
        </Container>
    );
}

export default TutorList;

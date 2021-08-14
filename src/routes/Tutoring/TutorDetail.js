import React from "react";
import tutors from "./tutors";

function TutorDetail({ match }) {
    const {
        params: { id },
    } = match;

    return (
        <div className="d-flex justify-content-center">
            <h2>Hello Tutor {id}!</h2>
            {tutors.map((tutor) => {
                if (tutor.id == id) {
                    return <h2>{tutor.koreanName}</h2>;
                }
            })}
        </div>
    );
}

export default TutorDetail;

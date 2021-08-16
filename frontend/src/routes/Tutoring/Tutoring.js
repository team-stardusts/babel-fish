import React from "react";
import { HashRouter, Route } from "react-router-dom";
import TutorDetail from "./TutorDetail";
import TutorList from "./TutorList";

function Tutoring(props) {
    const {
        match: { path },
    } = props;

    return (
        <HashRouter>
            <Route path={path} exact={true} component={TutorList} />
            <Route path={`${path}/:id`} exact={true} component={TutorDetail} />
        </HashRouter>
    );
}

export default Tutoring;

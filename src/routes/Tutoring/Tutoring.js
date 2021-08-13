import React from "react";
import { HashRouter, Link, Route } from "react-router-dom";
import TutorList from "./TutorList";

function Tutoring(props) {
    const {
        match: { path },
    } = props;

    return (
        <HashRouter>
            <Route path={path} exact={true} component={TutorList} />
        </HashRouter>
    );
}

export default Tutoring;

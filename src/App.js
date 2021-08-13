import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
// PAGES ================================================/
import Home from "./routes/Home";
import Tutoring from "./routes/Tutoring/Tutoring";
import Trip from "./routes/Trip";
import router from "./routes/router"; // --> routes를 담은 객체
//======================================================/
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Route path={router.home} exact={true} component={Home} />
            <Route path={router.tutoring} component={Tutoring} />
            <Route path={router.trip} component={Trip} />
        </HashRouter>
    );
}

export default App;

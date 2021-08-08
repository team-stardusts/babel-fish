import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./component/Navigation";
// PAGES ================================================/
import Home from "./routes/Home";
import Tutoring from "./routes/Tutoring";
import Trip from "./routes/Trip";
import router from "./routes/router"; // --> routes를 담은 객체
//======================================================/
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route path={router.home} exact={true} component={Home} />
                <Route path={router.tutoring} component={Tutoring} />
                <Route path={router.trip} component={Trip} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;

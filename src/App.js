import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./components/landing.component";
import Candidats from "./components/candidats.component";
import Navbar from "./components/navbar.component";
import Charts from "./components/charts.component";
import Administration from "./components/administration.component";

import "bootstrap/dist/css/bootstrap.min.css"
import './scss/app.scss';

function App()
{

    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={Landing} />
            <Route path="/candidats" exact component={Candidats} />
            <Route path="/charts" exact component={Charts} />
            <Route path="/administration" exact component={Administration} />
        </Router>
    );
}

export default App;

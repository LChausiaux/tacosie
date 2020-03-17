import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Landing from "./components/landing.component";
import Navbar from "./components/navbar.component";

import "bootstrap/dist/css/bootstrap.min.css"
import './scss/app.scss';

function App()
{

    return (
        <Router>
            <Navbar />
            <Route path="/" exact component={Landing} />
        </Router>
    );
}

export default App;

import React, {Component} from "react";
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Link} from "react-router-dom";
import logo from '../img/logo.png';


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="logo">
                    <div className="navbar-brand">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="brand-name">
                        <Link to="/" className="navbar-brand">SUPData</Link>
                        <Link to="/" className="navbar-brand">SUPData</Link>
                    </div>
                </div>
            </nav>
        );
    }
}
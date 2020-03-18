import React, {Component} from "react";
// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Link} from "react-router-dom";
import logo from '../img/logo.png';


export default class Navbar extends Component
{
    constructor(props) {
        super(props);

        this.changeTab = this.changeTab.bind(this);

        this.state = {
            tab: 'none'
        };
    }

    changeTab(e, newTab) {
        this.setState({
            tab: newTab
        });
    }

    render()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="logo">
                    <div className="navbar-brand">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="brand-name">
                        <Link to="/" className="navbar-brand title" onClick={(e) => this.changeTab(e ,'landing')}>République Populaire de Tacosie</Link>
                        <Link to="/" className="navbar-brand subtitle" onClick={(e) => this.changeTab(e ,'landing')}>Votez</Link>
                    </div>
                </div>
                <div className="navbar-items">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className={"nav-link " + (this.state.tab === 'landing' ? 'active' : '')} onClick={(e) => this.changeTab(e ,'landing')}>Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/charts" className={"nav-link " + (this.state.tab === 'charts' ? 'active' : '')} onClick={(e) => this.changeTab(e ,'charts')}>Charts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
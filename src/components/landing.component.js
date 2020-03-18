import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Landing extends Component
{
    render()
    {
        return (
            <div className='container'>
                <div className="call-to-action">
                    <h1>Voter</h1>
                    <div className="form-group">
                        <label htmlFor="key">Saisissez votre clef : </label>
                        <input className='form-control' id="key" type="text"/>
                    </div>
                    <Link to='/candidats' className="btn btn-primary-light">Voter</Link>
                </div>
            </div>
        );
    }
}
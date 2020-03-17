import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Landing extends Component
{
    render()
    {
        return (
            <div className="wrapper">
                <div className='call-to-action'>
                    <h1>Voter</h1>
                    <input type="text" className="key form-control" />
                    <a href="#" className="btn">Voter</a>
                </div>
                <div className="content">

                </div>
            </div>
        );
    }
}
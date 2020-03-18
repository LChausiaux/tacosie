import React, {Component} from "react";
import Gringo from '../img/gringo.jpg';

export default class Tile extends Component
{
    render()
    {

        return (
            <div className="col-5 card">
                <div className="header">
                    <div className="title">
                        Nom candidat
                    </div>
                    <div className="subtitle">
                        Nom partit
                    </div>
                </div>
                <div className="content">
                    <img src={Gringo} alt=""/>
                </div>
                <div className="btn-bar">
                    <a href="#" className='btn btn-primary-light'>Choisir</a>
                </div>
            </div>
        );
    }
}

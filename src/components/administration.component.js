import React, {Component} from "react";
import Graph from "./graph.component";
import {Bar, Pie} from 'react-chartjs-2';

export default class Pros extends Component
{

    constructor(props)
    {
        super(props);
        this.addCandidat = this.addCandidat.bind(this);
    }

    addCandidat()
    {
        let candidatContainer = document.getElementById('candidat-container');
        candidatContainer.innerHTML += '<div class="candidat">\n' +
            '            <label for="candidat-name">Ajouter un candidat</label>\n' +
            '            <input id=\'candidat-name\' name=\'candidat-name[]\' class=\'form-control\' type="text"\n' +
            '                   placeholder=\'Nom\'/>\n' +
            '            <input id=\'candidat-partit\' name=\'candidat-partit[]\' class=\'form-control\' type="text"\n' +
            '                   placeholder=\'Partit\'/>\n' +
            '        </div>\n';
    }

    render()
    {
        return (
            <div className='container administration'>
                <div className="row justify-content-center">
                    <div className="card col-sm-9">
                        <div className="form-group">
                            <label htmlFor="address">Ajouter une adresse</label>
                            <input id='address' name='address' className='form-control' type="text"
                                   placeholder={'Adresse'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="start">Ouverture des votes</label>
                            <input id="start" className='form-control' type="datetime-local"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="end">Fermeture des votes</label>
                            <input id="end" className='form-control' type="datetime-local"/>
                        </div>
                        <div className="form-group">
                            <div className="candidat" id='candidat-container'>
                                <label htmlFor="candidat-name">Ajouter un candidat</label>
                                <input id='candidat-name' name='candidat-name[]' className='form-control' type="text"
                                       placeholder='Nom'/>
                                <input id='candidat-partit' name='candidat-partit[]' className='form-control'
                                       type="text"
                                       placeholder='Partit'/>
                            </div>
                            <div className="btn-bar">
                                <div className='btn btn-primary-light' onClick={this.addCandidat}>Ajouter un autre candidat</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="btn-bar">
                            <div className='btn btn-primary'>Enregistrer l'élection</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React, {Component} from "react";

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
            '        </div>\n';
    }

    addElection()
    {
        let adminKey = document.getElementById('privateKey').value;
        let start = Date.parse(document.getElementById('start').value) / 1000;
        let end = Date.parse(document.getElementById('end').value) / 1000;

        let candidatesArr = [];
        let elements = document.getElementById('insert-election').elements['candidat-name'];
        for (let i = 0; i < elements.length; i++) {
            candidatesArr.push(elements[i].value);
        }
    }

    render()
    {
        return (
            <div className='container administration'>
                <div className="row justify-content-center">
                    <div className="card col-sm-9">
                        <form id='insert-election' action="">
                            <div className="form-group">
                                <label htmlFor="address">Adresse admin</label>
                                <input id='privateKey' name='privateKey' className='form-control' type="text"
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
                                    <input id='candidat-name' name='candidat-name[]' className='form-control'
                                           type="text"
                                           placeholder='Nom'/>
                                </div>
                                <div className="btn-bar">
                                    <div className='btn btn-primary-light' onClick={this.addCandidat}>Ajouter un autre
                                        candidat
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="btn-bar">
                                <div className='btn btn-primary' onClick={this.addElection}>Enregistrer l'élection</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
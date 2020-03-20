import React, {Component} from "react";
import Tile from "./tile.component";
import Gringo from "../img/gringo.jpg";

export default class Pros extends Component
{
    constructor(props)
    {
        super(props);
        this.chooseCandidat = this.chooseCandidat.bind(this);
        this.sendData = this.sendData.bind(this);
        this.removeModal = this.removeModal.bind(this);

        this.state = {
            isActive: false,
            candidat1:
                {
                    name: 'Nom candidat 1',
                    partit: 'Partit 1',
                    picture: 'gringo.jpg',
                },
            candidat2:
                {
                    name: 'Nom candidat 2',
                    partit: 'Partit 2',
                    picture: 'gringo.jpg',
                },
            candidat3:
                {
                    name: 'Nom candidat 3',
                    partit: 'Partit 3',
                    picture: 'gringo.jpg',
                },
            candidat4:
                {
                    name: 'Nom candidat 4',
                    partit: 'Partit 4',
                    picture: 'gringo.jpg',
                },
            chosenCandidat: {}
        }
    }

    //Send vote
    sendData()
    {
        //Do your magic !
    }


    chooseCandidat(childData)
    {
        this.setState({
            chosenCandidat: childData,
            isActive: true
        });
    };

    removeModal()
    {
        this.setState({
            isActive: false
        });
    };

    render()
    {
        return (
            <div className='container'>
                <div className={`modal ${this.state.isActive ? 'active' : 'hidden'}`}>
                    <div className="col-5 card">
                        <div className="header">
                            <div className="title">
                                {this.state.chosenCandidat.name}
                            </div>
                            <div className="subtitle">
                                {this.state.chosenCandidat.partit}
                            </div>
                        </div>
                        <div className="content">
                            <img src={Gringo} alt=""/>
                        </div>
                        <div className="btn-bar">
                            <div className='btn btn-primary-light' onClick={ this.removeModal }>Annuler</div>
                            <div className='btn btn-primary' onClick={this.sendData}>Valider mon choix</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <Tile
                        chooseCandidat={this.chooseCandidat}
                        candidat={this.state.candidat1}
                    />
                    <Tile
                        chooseCandidat={this.chooseCandidat}
                        candidat={this.state.candidat2}
                    />
                </div>
                <div className="row justify-content-center">
                    <Tile
                        chooseCandidat={this.chooseCandidat}
                        candidat={this.state.candidat3}
                    />
                    <Tile
                        chooseCandidat={this.chooseCandidat}
                        candidat={this.state.candidat4}
                    />
                </div>
            </div>
        );
    }
}
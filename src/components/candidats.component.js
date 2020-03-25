import React, {Component} from "react";
import Tile from "./tile.component";
import Gringo from "../img/gringo.jpg";
import axios from "axios";

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
            candidats: [],
            chosenCandidat: {},
            privateKey: props.location.state.privateKey,
            cni: props.location.state.cni,
        };
    }


    componentWillMount()
    {
        //ajax requests
        axios.get('/get-candidates')
            .then(res =>
            {
                let candidatsArr = [];

                for (let i = 0; i < res.data.length; i++) {
                    candidatsArr.push({
                        name: res.data[i],
                        partit: 'partit',
                        picture: 'gringo.jpg',
                    });
                }

                this.setState({
                    candidats: candidatsArr
                });
            });
    }

    displayCandidats()
    {
        return this.state.candidats.map((candidat, i) =>
        {
            return <Tile
                chooseCandidat={this.chooseCandidat}
                candidat={candidat}
            />;
        });
    }

    //Send vote
    sendData()
    {
        axios.get('/vote')
            .then(res =>
            {
            });
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
                            <div className='btn btn-primary-light' onClick={this.removeModal}>Annuler</div>
                            <div className='btn btn-primary' onClick={this.sendData}>Valider mon choix</div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    { this.displayCandidats() }
                </div>
            </div>
        );
    }
}
import React, {Component} from "react";
import Tile from "./tile.component";
import Gringo from "../img/gringo.jpg";
import axios from "axios";
import { ethers } from "ethers";
import {Redirect} from "react-router-dom";

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
            voted: false,
        };
    }


    componentWillMount()
    {
        //ajax requests
        axios.get('http://localhost:4000/get-candidates')
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
        axios.get('http://localhost:4000/vote')
            .then(res =>
            {
                // console.log(this.state.chosenCandidat.name)
                let contractAddress = res.data.contractAddress
                let abi = res.data.abi
                let chainUrl = res.data.chainUrl
                let networkId = res.data.networkId
                let privateKey = "0x12aef05baaee17481d12dafbd794b2c39d4dd0a794e70e2a340a88de818cdf5a"
                let provider = new ethers.providers.JsonRpcProvider(chainUrl, networkId)
                let user = new ethers.Wallet(privateKey, provider)
                let contract = new ethers.Contract(contractAddress, abi, provider)
                let userWithSigner = contract.connect(user)

                contract.voteOptions().then(res => {
                    userWithSigner.vote(res.indexOf(this.state.chosenCandidat.name)).then(tx => {
                        tx.wait().then(res => {
                            this.setState({
                                voted: true
                            })
                        })
                    })
                })
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
                    {
                        this.state.voted
                            ? <Redirect to="/charts" />
                            : ''
                    }
                </div>
            </div>
        );
    }
}
import React, {Component} from "react";
import {Link, Redirect} from "react-router-dom";

export default class Landing extends Component
{
    constructor(props)
    {
        super(props);
        this.validateForm = this.validateForm.bind(this);
        this.onChangePrivateKey = this.onChangePrivateKey.bind(this);
        this.onChangeCNI = this.onChangeCNI.bind(this);

        this.state = {
            CNI: '',
            privateKey: '',
            validateForm: false
        }
    }

    onChangeCNI(e)
    {
        this.setState({
            CNI: e.target.value
        });
    };

    onChangePrivateKey(e)
    {
        this.setState({
            privateKey: e.target.value
        });
    };

    //Validate CNI & private key inputs
    validateForm()
    {
        let validation = this.state.CNI !== '' && this.state.privateKey !== '';

        this.setState({
            validateForm: validation
        });
    };

    render()
    {
        return (
            <div className='container'>
                {this.validateForm}

                <div className="call-to-action">
                    <h1>Voter</h1>
                    <div className="form-group">
                        <label htmlFor="key">Saisissez identifiant de carte d'identité : </label>
                        <input className='form-control' id="CNI" type="text" value={this.state.CNI}
                               onChange={this.onChangeCNI}/>
                        <label htmlFor="key">Saisissez votre clef : </label>
                        <input className='form-control' id="privateKey" type="text" value={this.state.privateKey}
                               onChange={this.onChangePrivateKey}/>
                    </div>
                    {
                        this.state.validateForm
                            ? <Redirect to="/candidats"/>
                            : ''
                    }
                    <div onClick={this.validateForm}
                       className="btn btn-primary-light">Voter</div>
                </div>
            </div>
        );
    }
}
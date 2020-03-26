import React, {Component} from "react";
import Graph from "./graph.component";
import {Bar} from 'react-chartjs-2';
import axios from "axios";

export default class Pros extends Component
{

    constructor()
    {
        super();
        this.apiUrl = process.env.URL_API || "http://localhost:4000"
        this.state = {
            candidatsVotes: ''
        }
    }

    componentWillMount()
    {
        axios.get(`${this.apiUrl}/get-results`)
            .then(res =>
            {
                let labelsArr = [];
                let dataArr = [];

                for (let i = 0; i < res.data.length; i++) {
                    labelsArr.push(res.data[i].candidate,);
                    dataArr.push(res.data[i].vote,);
                }

                this.setState({
                    candidatsVotes: <Bar
                        data={{
                            labels: labelsArr,
                            datasets: [
                                {
                                    data: dataArr,
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 206, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)',
                                    ]
                                }
                            ]
                        }}
                        options={{
                            legend: false
                        }}
                    />,
                })
            });
    }

    render()
    {
        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <Graph
                        title="Votes en temps réel"
                        graph="Graph"
                        graphContent={this.state.candidatsVotes}/>
                </div>
            </div>
        );
    }
}
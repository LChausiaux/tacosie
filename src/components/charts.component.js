import React, {Component} from "react";
import Graph from "./graph.component";
import {Bar, Pie} from 'react-chartjs-2';

export default class Pros extends Component
{

    constructor()
    {
        super();
        this.state = {
            candidatsVotes: <Bar
                data={{
                    labels: ['Candidat 1', 'Candidat 2', 'Candidat 3', 'Candidat 4'],
                    datasets: [
                        {
                            data: [
                                50,
                                20,
                                63,
                                2,
                            ],
                            backgroundColor: [
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
            />
        }
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
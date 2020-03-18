import React, {Component} from "react";
import Tile from "./tile.component";

export default class Pros extends Component {

    render() {
        return (
            <div className='container'>
                <div className="row justify-content-center">
                    <Tile
                        title="Pourcentage de stagiaires"
                        graph="Graph"
                        tabLeft="Campus"
                        tabRight="Promo "/>

                    <Tile
                        title="Pourcentage de contrat pro "
                        graph="Graph"
                        tabLeft="Campus"
                        tabRight="Promo"/>
                </div>
                <div className="row justify-content-center">
                    <Tile
                        title="Recrutement"
                        graph="Graph"
                        tabLeft="Stages"
                        tabRight="Contrats pro"/>
                    <Tile
                        title="Recrutement"
                        graph="Graph"
                        tabLeft="Stages"
                        tabRight="Contrats pro"/>
                </div>
            </div>
        );
    }
}
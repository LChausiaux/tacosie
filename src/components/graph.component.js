import React, {Component} from "react";

export default class Graph extends Component
{

    constructor(props)
    {
        super(props);

        this.state = {
            graph: '',
        };
    }

    componentWillReceiveProps(nextProps, nextContent)
    {
        if (this.props !== nextProps) {
            this.setState({
                graph: nextProps.graphContent,
            });
        }
    }

    render()
    {

        return (
            <div className="col-9 card graph">
                <div className="header">
                    <div className="title">
                        {this.props.title}
                    </div>
                </div>
                <div className="graphContent">
                    {this.props.graphContent}
                </div>
            </div>
        );
    }
}

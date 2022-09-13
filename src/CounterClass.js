import React from 'react';

export default class Counter extends React.Component{
    static defaultProps = {
        startAt: 0,
        countBy: 1
    };

    constructor(props){
        super(props);

        this.state = {
            counter: props.startAt
        };

        this.Increment = this.Increment.bind(this);
        this.Decrement = this.Decrement.bind(this);
    }

    Increment(){
        this.setState({counter: this.state.counter + this.props.countBy})
    }

    Decrement(){
        this.setState({counter: this.state.counter - this.props.countBy})
    }

    render(){
        return (
            <>
            <p>Start At: {this.props.startAt}</p>
            <p>Count By: {this.props.countBy}</p>
            <h4>{this.state.counter}</h4>
            <button className="btn btn-primary" onClick={this.Increment}>Increment</button>
            <button className="bn btn-danger" onClick={this.Decrement}>Decrement</button>
            </>
        );
    }
}
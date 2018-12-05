// eslint-disable-next-line
import React, { Component } from 'react';

class Square extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 'hahaha',
        }
    }
    render() {
        return (
            <button
                className="square"
                onClick={() => {
                    const num = parseInt(Math.random() * 100)
                    this.setState({value: `new set value ${num}`})
                    console.log(11111)
                }}>
                {this.state.value}
            </button>
        )
    }
}

export default Square


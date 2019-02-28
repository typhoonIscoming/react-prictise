// eslint-disable-next-line
import React, { Component } from 'react';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'hahaha',
            btn2: '初始值',
            ...props,
        }
    }
    handClick(value) {
        const params = {
            btn2: '更新后的值' + value,
        }
        this.setState({ ...params })
    }
    render() {
        return (
            <div>
                <button
                    className="square"
                    onClick={() => {
                        const num = parseInt(Math.random() * 100)
                        this.setState({value: `new set value ${num}`})
                    }}>
                    {this.state.value}
                </button>
                <button onClick={() => {
                    const num = parseInt(Math.random() * 100)
                    this.handClick(num)
                }}>
                    {this.state.btn2}
                </button>
            </div>
        )
    }
}

export default Square


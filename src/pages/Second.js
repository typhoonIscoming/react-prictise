import React, { Component } from 'react';

class Second extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'zhangsan',
            age: 20,
            ...props,
        }
        console.log('props', props)
        console.log('state', this.state)
    }
    getStateValue(data, e) {
        this.setState((prevState, props) => {
            return {age: ++prevState.age}
        })
        console.log('第二页的state中的数据', data, e)
    }
    render() {
        return (
            <div className='second-container'>
                <p>我是第二页的p标签，我最牛逼{this.state.age}</p>
                <button onClick={this.getStateValue.bind(this, this.state.age)}>点击</button>
            </div>
        )
    }
    componentWillMount() {
        console.log('componentWillMount,', new Date().getTime())
    }
    componentDidMount() {
        console.log('componentDidMount,', new Date().getTime())
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps,', new Date().getTime())
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate,', new Date().getTime())
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', new Date().getTime());
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate,', new Date().getTime())
    }
    componentWillUnmount() {
        console.log('componentWillUnmount,', new Date().getTime())
    }

}

export default Second

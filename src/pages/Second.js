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
    getStateValue() {
        console.log('第二页的state中的数据', {...this.state})
    }
    render() {
        return (
            <div className='second-container'>
                <p>我是第二页的p标签，我最牛逼</p>
                <button onClick={() => this.getStateValue()}>点击</button>
            </div>
        )
    }
}

export default Second

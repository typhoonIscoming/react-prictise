import React, { Component } from 'react';
import browser from '../utils/browser'
import { map } from 'lodash'

import Select from '../components/select'
import counter from '../model/reducer'
import { addTodo } from '../model/action/index'

import { createStore } from 'redux';

const store = createStore(counter)

class Second extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'zhangsan',
            age: 10,
            numberOfGuests: 3,
            ...props,
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.printChild = this.printChild.bind(this)
    }
    getStateValue(data, e) {
        this.setState((prevState, props) => {
            return {age: ++prevState.age}
        })
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(addTodo('i am text'))
        store.dispatch(addTodo({ type: 'ADD_TODO', text: 'i am input box', payload: value }), value)
        this.setState({
            [name]: value
        });
        // console.log('----', name, value, browser())
    }
    printChild(data) {
        console.log('this is from child component data and print in parent', data)
    }
    render() {
        const arr = [ {name: 'zhangsan', age: 10 }, { name: 'lisi', age: 15 }, { name: 'wangwu', age: 20 } ]
        return (
            <div className='second-container'>
                { this.state.age >= 13 && <p>我是第二页的p标签，我最牛逼{this.state.age}</p> }
                {map([1, 2, 3], (item, index) => <p key={index.toString()}>{item}</p>)}
                <button onClick={this.getStateValue.bind(this, this.state.age)}>点击</button>
                <input
                    name="numberOfGuests"
                    type="number"
                    placeholder='输入框'
                    value={this.state.numberOfGuests}
                    onChange={this.handleInputChange} />
                <Select optionList={arr} parentEvent={this.printChild}>
                    <div className='select-slot'>i am the slot in component of Select</div>
                </Select>
            </div>
        )
    }
    // componentWillMount() {
    //     console.log('componentWillMount,', new Date().getTime())
    // }
    // componentDidMount() {
    //     console.log('componentDidMount,', new Date().getTime())
    // }
    // componentWillReceiveProps() {
    //     console.log('componentWillReceiveProps,', new Date().getTime())
    // }
    // shouldComponentUpdate(newProps, newState) {
    //     console.log('shouldComponentUpdate,', new Date().getTime())
    //     return true;
    // }
    // componentWillUpdate(nextProps, nextState) {
    //     console.log('componentWillUpdate', new Date().getTime());
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('componentDidUpdate,', new Date().getTime())
    // }
    // componentWillUnmount() {
    //     console.log('componentWillUnmount,', new Date().getTime())
    // }

}

export default Second

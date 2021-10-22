// eslint-disable-next-line
import React, { Component, useState } from 'react';

import { connect } from 'react-redux'
import Menu from '../common/menu'
import '../css/product.scss'

// eslint-disable-next-line
class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
        this.changeCount = this.changeCount.bind(this)
    }
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps', new Date().getTime())
        console.log('getDerivedStateFromProps', props, state)
        return true
    }
    componentDidMount() {
        console.log('componentDidMount', new Date().getTime())
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', new Date().getTime())
        console.log('shouldComponentUpdate', nextProps, nextState)
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate', new Date().getTime())
        console.log('getSnapshotBeforeUpdate', prevProps, prevState)
        return true
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', new Date().getTime())
    }
    changeCount() {
        let { count } = this.state
        this.setState({
            count: ++count
        })
    }
    render() {
        console.log('render', new Date().getTime())
        return (
            <div className="product-page">
                <div className="product-content">
                    <p>显示count={this.state.count}</p>
                    <button onClick={this.changeCount}>+1</button>
                </div>
                <Menu />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { product: state.product }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

function FunctionProduct(props) {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)
    return (
        <div className="product-page">
            <div className="product-content">
                <p>显示count={count}</p>
                <input placeholder="step" value={step} onChange={(e) => setStep(e.target.value)} />
                <button onClick={() => setCount(count+step)}>+{step}</button>
            </div>
            <Menu />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FunctionProduct)


// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Button, message, Progress } from 'antd';

import {
    changeCounter
} from '../model/action'

import '../css/mine.scss'

class Mine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            timer: null,
        }
        console.log(props)
    }
    showMessage() {
        // message.info('这是antd的message组件')
        this.timer = setInterval(() => {
            const { counter } = this.props.message
            // console.log(counter)
            if(counter < 100) {
                this.props.changeCounter(counter + 1)
            } else {
                this.props.changeCounter(0)
                clearInterval(this.timer)
            }
        }, 200)
        
    }
    componentWillUnmount() {
        if(this.timer) {
            clearInterval(this.timer)
            this.props.changeCounter(0)
        }
    }
    render() {
        const { counter } = this.props.message
        return (
            <div className='home-page'>
                我是 Mine页面
                <Button type="primary" onClick={this.showMessage.bind(this)}>这是antd组件库的button </Button>
                <p>分割线</p>
                <Progress type="circle" percent={counter} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { message: state.message }
}
function mapDispatchProps(dispatch) {
    return { changeCounter: (params) => dispatch(changeCounter(params)) }
}
export default connect(mapStateToProps, mapDispatchProps)(Mine)
// eslint-disable-next-line
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux'

import { Button, Progress } from 'antd';

import {
    changeCounter
} from '../model/action'

import '../css/mine.scss'

let LazyLoad = React.lazy(() => import('../components/LazyLoad'))



class Mine extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            timer: null,
        }
    }
    showMessage() {
        // message.info('这是antd的message组件')
        console.log('context', this.props)
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
    componentDidMount() {
        console.log(this.context)
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
                <p>我是 Mine页面</p>
                <Button type="primary" onClick={this.showMessage.bind(this)}>这是antd组件库的button </Button>
                <p>分割线</p>
                <Progress type="circle" percent={counter} />
                <Suspense fallback={<div>loading...</div>}>
                    <LazyLoad />
                </Suspense>
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
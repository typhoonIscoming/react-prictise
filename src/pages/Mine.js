// eslint-disable-next-line
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux'

import { fetch } from 'cross-fetch'

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
        this.timer = setInterval(() => {
            const { counter } = this.props.message
            if(counter < 100) {
                this.props.changeCounter(counter + 1)
            } else {
                this.props.changeCounter(0)
                clearInterval(this.timer)
            }
        }, 200)
        
    }
    getTodayHistory() {
        fetch('https://route.showapi.com/341-2?maxResult=1&page=1&showapi_appid=43725&showapi_timestamp=20190806102527&showapi_sign=b77090587b5b47359599d7b63b094f98', {
            mode: 'cors',
            method: 'get',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then(res => res.json().then((result) => {
            console.log('result', result)
        }))
    }
    componentDidMount() {
    }
    componentWillUnmount() {
        if(this.timer) {
            clearInterval(this.timer)
            this.props.changeCounter(0)
        }
    }
    render() {
        return (
            <div className='home-page'>
                <p>我是 Mine页面</p>
                <Suspense fallback={<div>loading...</div>}>
                    <LazyLoad />
                </Suspense>
                <p onClick={ this.getTodayHistory }>
                    点击我，获取历史上的今天发生的事
                </p>
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
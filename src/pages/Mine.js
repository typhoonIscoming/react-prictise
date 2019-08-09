// eslint-disable-next-line
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux'

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
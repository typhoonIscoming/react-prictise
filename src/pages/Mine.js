// eslint-disable-next-line
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux'
import Menu from '../common/menu'
import {
    changeCounter,
    changeMessage,
} from '../model/action'

import '../css/mine.scss'

import FnCom from '../components/fncomponent'

let LazyLoad = React.lazy(() => new Promise(resolve => {
    setTimeout(() => {
        resolve(import('../components/LazyLoad'))
    }, 2000)
}))



class Mine extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            timer: null,
        }
    }
    componentDidMount() {
        console.log('this.props', this.props)
        this.props.changeMessage()
    }
    componentWillUnmount() {
        if(this.timer) {
            clearInterval(this.timer)
            this.props.changeCounter(0)
        }
    }
    render() {
        return (
            <div className='mine-page'>
                <div className="mine-content">
                    <p>我是 Mine页面</p>
                    <Suspense fallback={<div>loading...</div>}>
                        <LazyLoad />
                        <FnCom value="父组件的值" />
                    </Suspense>
                </div>
                <Menu />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { message: state.message }
}
function mapDispatchProps(dispatch) {
    return {
        changeCounter: (params) => dispatch(changeCounter(params)),
        changeMessage: () => dispatch(changeMessage()),
    }
}


export default connect(mapStateToProps, mapDispatchProps)(Mine)
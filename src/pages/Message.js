import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetch } from 'cross-fetch'

// 引入本页面的样式
import '../css/message.scss'

import { changeMessage } from '../model/action'

class Message extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.getData = this.getData.bind(this)
        console.log('message', this.props)
    }
    getData() {
        this.props.changeMessage(123)
    }
    render() {
        return (
            <div className="message-page-container">
                <p className="el-margin-20" onClick={this.getData}>去掉用异步的action调用接口</p>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store
}
function mapDispatchProps(dispatch) {
    return {
        changeMessage: (args) => dispatch(changeMessage(args))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Message)
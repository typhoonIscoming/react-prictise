import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetch } from 'cross-fetch'
import Menu from '../common/menu'

// 引入本页面的样式
import '../css/message.scss'

import { changeMessage } from '../model/action'




class Message extends Component{
    constructor(props) {
        super(props)
        this.state = {
            
        }
        this.getData = this.getData.bind(this)
    }
    getData() {
        this.props.changeMessage()
    }
    render() {
        return (
            <div className="message-page-container">
                <div className="message-content">
                    <p className="el-margin-20" onClick={this.getData}>去掉用异步的action调用接口</p>
                    <div>
                        {this.props.message.list.map((element, index) => {
                            return (
                                <div key={index}>
                                    <p>姓名：{element.name}</p>
                                    <p>年龄：{element.number}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="background-sprite"></div>
                </div>
                <Menu />
            </div>
        )
    }
}

function mapStateToProps(store) {
    return { message: store.message }
}
function mapDispatchProps(dispatch) {
    return {
        changeMessage: (args) => dispatch(changeMessage(args))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Message)
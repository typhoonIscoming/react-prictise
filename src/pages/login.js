import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';
import '../css/login.scss'

class Login extends Component{
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        const { username, password } = this.state
        return (
            <div className="login-page">
                <div className="login-container">
                    <Input
                        className="input-content"
                        value={ username }
                        placeholder="请输入用户名"
                        prefix={ <Icon type="user" /> }
                    />
                    <Input
                        className="input-content"
                        value={ password }
                        placeholder="请输入密码"
                        prefix={ <Icon type="safety-certificate" /> }
                    />
                    <div className="optional-bar input-content">
                        <Button type="danger">取消</Button>
                        <Button type="primary">确定</Button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login
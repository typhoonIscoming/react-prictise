import React, { Component } from 'react';
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
        return (
            <div className="login-page">
                <div className="login-container">
                    
                    <div className="optional-bar input-content">
                    </div>

                </div>
            </div>
        )
    }
}

export default Login
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import './router.scss'

// 做路由跳转的插件
// import AnimatedRouter from 'react-animated-router'; //我们的AnimatedRouter组件
// import 'react-animated-router/animate.css'; //引入默认的动画样式定义

import Product from '../pages/Product.js'
import Find from '../pages/Find'
import Home from '../pages/Home.js'
import Mine from '../pages/Mine'
import Error from '../pages/Error'
import Message from '../pages/Message'
import Login from '../pages/login'
import SubFind from '../pages/subPage/subFind'
import List from '../pages/list'


class MainRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }
    render() {
        return (
            <div className='content page-overflow-y-scroll'>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect exact to="/home" />)} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/find" component={Find} />
                    <Route exact path="/find/subFind" component={SubFind} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/message" component={Message} />
                    <Route exact path="/mine" component={Mine} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/list/:id" component={List} />
                    <Route component={Error} />
                </Switch>
            </div>
        )
    }
}

export default MainRoute
import React from 'react'
import './router.css'
import {
    Route,
    Switch,
    Redirect,
  } from 'react-router-dom'

import Product from '../pages/Product.js'
import Find from '../pages/Find'
import Home from '../pages/Home.js'
import Mine from '../pages/Mine'
import Error from '../pages/Error'



class MainRoute extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props
        }
    }
    render() {
        return (
            <div className='content'>
                <Switch { ...this.props }>
                    <Route exact path="/" render={() => (<Redirect exact to="/Home" />)} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/find" component={Find} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/mine" component={Mine} />
                    <Route component={Error} />
                </Switch>
            </div>
        )
    }
}

export default MainRoute
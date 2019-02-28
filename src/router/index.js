import React from 'react'
// import { Router, Route, BrowserRouter } from 'react-router-dom'
import './router.css'
import {
    // BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
  } from 'react-router-dom'

import Square from '../pages/spuare.js'
import Second from '../pages/Second'
import Home from '../pages/Home.js'
import Mine from '../pages/Mine'

class MainRoute extends React.Component {
    getDefaultRouter() {
        return '/Home'
    }
    render() {
        return (
            <div className='content'>
                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/Home' />
                    </Route>
                    <Route path="/Home" component={Home} />
                    <Route path="/Second" component={Second} />
                    <Route path="/Square" component={Square} />
                    <Route path="/Mine" component={Mine} />
                </Switch>
            </div>
        )
    }
}

export default MainRoute
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

const MainRoute = () => (
    <div className='content'>
        <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path="/Second" component={Second} />
            <Route path="/Square" component={Square} />
            <Route path="/Mine" component={Mine} />
        </Switch>
    </div>
)

export default MainRoute
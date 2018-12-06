import React from 'react'
// import { Router, Route, BrowserRouter } from 'react-router-dom'
import './router.css'
import {
    // BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom'

import Square from '../pages/spuare.js'
import Second from '../pages/Second'

const MainRoute = () => (
    <div className='content'>
        <Switch>
            <Route exact path="/" component={Square}/>
            <Route path="/Second" component={Second} />
        </Switch>
    </div>
)

export default MainRoute
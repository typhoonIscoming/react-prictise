import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './menu.css'

import menu from '../utils/menu'


class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props,
        }
        // console.log('自组建打印父组件的props', props)
    }
    render() {
        return (
            <ul className='menu-container'>
                {
                    menu.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={item.url}
                                    exact
                                    activeClassName='selected'
                                >
                                    {item.name + (index+1)}
                                </NavLink>
                            </li>)
                        }
                    )
                }
            </ul>
        )
    }
}

export default MyComponent
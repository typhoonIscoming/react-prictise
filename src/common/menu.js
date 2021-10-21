import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

import './menu.scss'

import menu from '../utils/menu'


class MyComponent extends Component {
    render() {
        return (
            <ul className='menu-container'>
                {
                    menu.map((item, index) => {
                        return (
                            <li
                                key={index}
                                className="nav-menu"
                            >
                                <NavLink
                                    to={item.url}
                                    exact
                                    activeClassName='selected'
                                >
                                    { item.name }
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
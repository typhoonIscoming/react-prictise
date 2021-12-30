import React, { Component } from 'react';

import { NavLink, Link } from 'react-router-dom';

import './menu.scss'

import menu from '../utils/menu'


class MyComponent extends Component {
    render() {
        const random = Math.ceil(Math.random() * 100)
        return (
            <ul className='menu-container'>
                {
                    [
                        menu.map((item, index) => {
                            return (
                                <li key={index} className="nav-menu" >
                                    <NavLink
                                        to={item.url}
                                        exact
                                        activeClassName='selected'
                                    >
                                        { item.name }
                                    </NavLink>
                                </li>
                                )
                            }
                        ),
                        <li className="nav-menu">
                            <Link key='list' to={`/list/${random}`} exact activeClassName='selected'>list页{random}</Link>     
                        </li>
                    ]
                }
            </ul>
        )
    }
}

export default MyComponent
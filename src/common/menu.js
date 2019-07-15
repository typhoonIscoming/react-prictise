import React from 'react';

import { NavLink } from 'react-router-dom';

import './menu.css'

import menu from '../utils/menu'

// class Item extends React.Component{
//     constructor(props) {
//         super(props);
//         this.handClick = this.handClick.bind(this)
//     }
//     handClick(str) {
//         console.log('你点击了', str)
//     }
//     render() {
//         return (
//             <li onClick={this.handClick(this.props.data.name)}>{this.props.data.name}</li>
//         )
//     }
    
// }

const MyComponent = (props) => {
    console.log('自组建打印父组件的props', props)
    return (
        <ul className='menu-container'>
            { menu.map((item, index) => {
            // return <Item key={index} data={item}/>
            return (
                <li key={index}>
                    <NavLink
                        to={item.url}
                        activeClassName='selected'
                    >
                        {item.name + (index+1)}
                    </NavLink>
                </li>)
            }) }
        </ul>
    )
}

export default MyComponent
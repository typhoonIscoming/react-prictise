import React, { Component } from 'react';
import { connect } from 'react-redux'
import { map } from 'lodash'

import { Icon } from 'antd-mobile';

import '../css/find.scss'
import history from '../assets/mine/add.png'

import { getLaugh, getHistory } from '../model/action'

const ShowElement = (props) => {
    const { status, result, error } = props
    if(status === 0) {
        return ( <Icon type="loading" /> )
    } else if(status === 1) {
        return map(result, (item, index) => {
            return (<div className="content-item" key={ index }>
                <p>{ item.title }</p>
                <img src={ item.img }  alt={ item.title } />
            </div>)
        })
    } else if(status === 2) {
        return (
            <div>{ error }</div>
        )
    } else {
        return (<div></div>)
    }
}


class Find extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: 'zhangsan',
            age: 10,
            numberOfGuests: 3,
            menu: [{ title: '笑话大全', img: history }, { title: '历史上的今天', img: history }],
        }
    }
    getData(index) {
        if(index === 0) this.props.getLaugh()
        else if(index === 1) this.props.getHistory()
    }
    render() {
        const { status, result, error } = this.props.find
        const menu = this.state.menu
        return (
            <div className='find-container'>
                <ul className="functional-menu">
                    { map(menu, (item, index) => {
                        return (
                            <li key={ index } onClick={ this.getData.bind(this, index) }>
                                <p>{ item.title }</p>
                                <img src={item.img} alt="img" />
                            </li>
                        )
                    }) }
                </ul>
                <div className="search-result">
                    <ShowElement
                        status={ status }
                        result={ result }
                        error={ error }
                    />
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return { find: state.find }
}
function mapDispatchProps(dispatch) {
    return {
        getLaugh: (params) => dispatch(getLaugh()),
        getHistory: () => dispatch(getHistory())
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Find)

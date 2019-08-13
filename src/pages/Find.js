import React, { Component } from 'react';
import { connect } from 'react-redux'
import { map } from 'lodash'

import { Icon, Tabs, } from 'antd-mobile';
import Menu from '../common/menu'

import '../css/find.scss'

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
            tabs: [{ title: '笑话大全'}, { title: '历史上的今天' }, { title: '生僻字' }, { title: '24点' }],
        }
    }
    getData(index) {
        if(index === 0) this.props.getLaugh()
        else if(index === 1) this.props.getHistory()
    }
    skip() {
        console.log(this.props)
        this.props.history.push({ pathname: '/find/subFind' })
    }
    renderContent = tab => {
        return (
            <div className="result-container">
                <p>Content of {tab.title}</p>
            </div>
        );
    }
    render() {
        const { tabs } = this.state
        return (
            <div className="find-page">
                <div className='find-container'>
                    <Tabs
                        tabs={ tabs }
                        renderTabBar={ props => <Tabs.DefaultTabBar {...props} page={3} /> }
                    >
                        { this.renderContent }
                    </Tabs>
                </div>
                <Menu />
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

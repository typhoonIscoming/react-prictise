import React from 'react';
import { connect } from 'react-redux'
// import { map } from 'lodash'

import { Tabs, } from 'antd-mobile';
import Menu from '../common/menu'

import '../css/find.scss'

import { getLaugh, getHistory } from '../model/action'

import * as component from './findPage'

const renderContent = (tab, index) => {
    const Child = component[tab.componentName]
    return (
        <div className="result-container" key={index}>
            <p>Content of {tab.title}</p>
            { Child && <Child className="tse-tab-item" /> }
        </div>
    );
}


function Find(props) {
    const tabs = [
        { title: '笑话大全', componentName: 'TseJoke' },
        { title: '历史上的今天', componentName: 'TseHistory' },
        { title: '生僻字', componentName: 'TseRareWord' },
        { title: '24点', componentName: 'TseGame' },
    ]
    return (
        <div className="find-page">
            <div className='find-container'>
                <Tabs
                    tabs={ tabs }
                    renderTabBar={ prop => <Tabs.DefaultTabBar {...prop} page={3} /> }
                    initialPage={0}
                    className="tse-tabs"
                >
                    {
                        tabs.map((item, index) => renderContent(item, index))
                    }
                </Tabs>
            </div>
            <Menu />
        </div>
    )

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

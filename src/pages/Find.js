import React from 'react';
import { connect } from 'react-redux'
// import { map } from 'lodash'

import { Tabs, } from 'antd-mobile';
import Menu from '../common/menu'

import '../css/find.scss'

import { getLaugh, getHistory } from '../model/action'

const renderContent = (tab, index) => {
    return (
        <div className="result-container" key={index}>
            <p>Content of {tab.title}</p>
        </div>
    );
}

function createMarkup() {
    return {__html: 'First &middot; Second'};
}

function Find(props) {
    const tabs = [{ title: '笑话大全'}, { title: '历史上的今天' }, { title: '生僻字' }, { title: '24点' }]
    return (
        <div className="find-page">
            <div className='find-container'>
                <Tabs
                    tabs={ tabs }
                    renderTabBar={ prop => <Tabs.DefaultTabBar {...prop} page={3} /> }
                >
                    {
                        tabs.map((item, index) => renderContent(item, index))
                    }
                </Tabs>
                <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />
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

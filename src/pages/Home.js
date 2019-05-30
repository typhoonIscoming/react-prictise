// eslint-disable-next-line
import React, { Component } from 'react';

class Home extends React.Component {
    render() {
        console.log(this.context.store)
        return (
            <div className='home-page'>
                我是 home页面
            </div>
        )
    }
}

export default Home
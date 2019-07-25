// eslint-disable-next-line
import React, { Component } from 'react';

import { Button } from 'antd';

import '../css/mine.scss'

class Mine extends React.Component {
    render() {
        return (
            <div className='home-page'>
                我是 Mine页面
                <Button type="primary">这是antd组件库的button </Button>
            </div>
        )
    }
}

export default Mine
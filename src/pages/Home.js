// eslint-disable-next-line
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// import PropTypes from 'prop-types'

const setIntervalMix = {
    componentWillMount() {
        console.log('this is componentWillMount in mixin')
    },
};

/**函数式组件 */
const MyDiv = () => <div>
    <input />
    this is my component
</div>
/********** */


class MyComponent extends Component {
    render() {
        return (
            <div className="mycomponent-box">
                <p>this is my component-box</p>
            </div>
        )
    }
}

class Executioner extends Component {
    constructor(props) {
        super(props)
        this.addCounter = this.addCounter.bind(this)
    }
    addCounter() {
        this.props.callback()
        console.log(this.props.counter)
    }
    render() {
        const children = this.props.children
        return (
            <div onClick={ this.addCounter }>
                { children }
            </div>
        )
    }
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            counter: 1,
        }
        this.callback = this.callback.bind(this)
    }
    
    componentDidMount() {
        const p = document.getElementsByClassName('pag-p')[0]
        const el = findDOMNode(p)
        el.style.color = 'red'
        console.log('el', el)
        this.refs['pag-p-two'].style.color = 'greenyellow'
    }
    doSomething() {
        console.log('reactDom\'s instance function')
    }
    callback() {
        let counter = this.state.counter
        this.setState({
            counter: counter + 1
        })
    }
    render() {
        return (
            <div className='home-page'>
                我是 home页面
                <p className="pag-p">this is new line</p>
                <p className="pag-p-two" ref="pag-p-two">this is refs pag</p>
                <MyDiv />
                <MyComponent ref="langBtnList" />
                <Executioner
                    counter={ this.state.counter }
                    callback={ this.callback }
                >
                    <h1>这是第一个元素, 计数器={this.state.counter}</h1>
                </Executioner>
            </div>
        )
    }
}

Home.defaultProps = {
    initialCounter: 0
}
const home = new Home()
home.doSomething()

Executioner.propTypes = {
    // children: PropTypes.array,
}


export default Home
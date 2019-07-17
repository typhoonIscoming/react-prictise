// eslint-disable-next-line
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { changesecond } from '../model/action/index'

import '../css/home.scss';
import imageNotice from '../images/notice.png'

// 在需要使用store中的数据的组件中，如果要获取state、action和reducer，就将connect导入，connect的作用就是将state、
// 和actionmerge到这个组件的props中。
function mapStateToProps(state) {
    return {
        second: state.second
    };
}

function mapDispatchProps(dispatch) {
    return {
        changeAction: (arg) => dispatch(changesecond(arg)),
    };
}

/**函数式组件 */
const MyDiv = () => <div className="functional-component">
    this is my functional component, it's just used in lists for show datas
</div>
/********** */


class MyComponent extends Component {
    constructor() {
        super()
        this.state = {
            inputContent: '',
        }
        this.inputEvent = this.inputEvent.bind(this)
    }
    inputEvent(e) {
        this.setState({
            inputContent: e.target.value
        })
    }
    render() {
        return (
            <div className="mycomponent-box">
                <p>
                    <input
                        className="home-component-input"
                        value={this.state.inputContent}
                        onChange={ this.inputEvent }
                    />
                </p>
                <p>this is my component-box, { this.state.inputContent }</p>
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
        this.changeStore = this.changeStore.bind(this)
    }
    
    componentDidMount() {
        const p = document.getElementsByClassName('pag-p')[0]
        const el = findDOMNode(p)
        el.style.color = 'red'
        // console.log('el', el)
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
    changeStore() {
        const num = parseInt(Math.random() * 100)
        this.props.changeAction({ type: 'CHANGESECOND', payload: num })
        console.log('home\'s props', this.props)
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
                    <h2>这是第一个元素, 计数器={this.state.counter}</h2>
                </Executioner>
                <p onClick={this.changeStore}>
                    点击改变store中second中的数据 number={this.props.second.number}
                </p>
                <img className="image-notice" src={imageNotice} alt="notice" />
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


export default connect(mapStateToProps, mapDispatchProps)(Home)
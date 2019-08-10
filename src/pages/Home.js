// eslint-disable-next-line
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { changesecond } from '../model/action/index'

import '../css/home.scss';
import imageNotice from '../assets/notice.png'

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
const MyDiv = (props) => {
    console.log('functional props', props)
    return (
        <div className="functional-component">
            this is my functional component, it's just used in lists for show datas
        </div>
    )
}
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
        this.goMine = this.goMine.bind(this)
        this.creatRefElement = React.createRef()
    }
    
    componentDidMount() {
        const p = document.getElementsByClassName('pag-p')[0]
        const el = findDOMNode(p)
        el.style.color = 'red'
        // console.log('el', el)
        this.refs['pag-p-two'].style.color = 'greenyellow'
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return 'react16';
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('snapshot = ', snapshot);
    }
    doSomething() {
        // console.log('reactDom\'s instance function')
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

    focusTextInput = () => {
        // 通过this.textInput 访问DOM节点
        this.textInput.focus();
    }
    getCreateRef = () => {
        console.log('this.creatRefElement', this.creatRefElement.current)
        console.log(this.state)
    }
    goMine() {
        this.props.history.push({ pathname: '/mine', query: { name: 'jack' } })
    }
    static defaultProps = {
        name: 'cxy'
    }
    render() {
        return (
            <div className='home-page'>
                我是 home页面
                <p className="pag-p">this is new line</p>
                <p className="pag-p-two" ref="pag-p-two">this is refs pag</p>
                <MyDiv name="xie" address="shanghai" />
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
                <div>
                    <p> 定义refs的方法：回调函数，点击button，输入框聚焦 </p>
                    <input className="inputStyle" type="text" ref={(textInput) => this.textInput = textInput} /> 
                    <button onClick={this.focusTextInput}>focus</button>
                </div>
                <p
                    ref={this.creatRefElement}
                    onClick={this.getCreateRef}
                >
                    点击我，获取通过createRef()得到的元素
                </p>
                <p onClick={this.goMine}>点击我，跳转到我的页面</p>
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
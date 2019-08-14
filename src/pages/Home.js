// eslint-disable-next-line
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
// import PropTypes from 'prop-types'
import recomputed, { $state } from 'recomputed'

import { connect } from 'react-redux'
import { changesecond } from '../model/action/index'

import Menu from '../common/menu'

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
    // console.log('functional props', props)
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
                        type="number"
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
            counter: 1,
            list: [{ id: '1', name: '语文' }, { id: '2', name: '数学' }, { id: '3', name: '英语' }],
            valueTel: '',
            baseNum: 20,
        }
        this.callback = this.callback.bind(this)
        this.changeStore = this.changeStore.bind(this)
        this.goMine = this.goMine.bind(this)
        this.creatRefElement = React.createRef()

        // 设置计算书型的实例对象
        const composer = recomputed(this);
        this.getContacts = composer(
            $state('valueTel'),
            valueTel => valueTel * 10
        )

        // 如果一个计算属性要依赖于另一个计算属性
        this.getBiggest = composer(
            this.getContacts,
            $state('baseNum'),
            (getContacts, baseNum) => {
                console.log('getContacts=', getContacts, ', baseNum=', baseNum)
                return getContacts + baseNum
            }
        )
    }
    
    componentDidMount() {
        const p = document.getElementsByClassName('pag-p')[0]
        const el = findDOMNode(p)
        el.style.color = 'red'
        this.refs['pag-p-two'].style.color = 'greenyellow';
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
    add() {
        const arr = ['历史', '化学', '物理', '生物', '政治', '高数', '线性代数']
        const index = Math.floor(Math.random() * arr.length)
        const { list } = this.state;
        let temList = list
        if(list.filter((item) => item.name === arr[index] ).length === 0) {
            const len = list.length + 1;
            temList.push({ id: len.toString(), name: arr[index] })
            this.setState({
                list: temList
            })
        }
    }
    changeValue(event) {
        this.setState({
            valueTel: event.target.value
        })
    }
    static defaultProps = {
        name: 'cxy'
    }
    render() {
        const { list, valueTel } = this.state
        const getContacts = this.getContacts()
        const getBiggest = this.getBiggest()
        console.log('list', list)
        return (
            <div className='home-page'>
                <div className="home-container">
                    我是 home页面
                    <p className="pag-p">this is new line</p>
                    <p className="pag-p-two" ref="pag-p-two">this is refs pag</p>
                    <MyDiv name="xie" address="shanghai" />
                    <MyComponent
                        ref="langBtnList"
                    />
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
                        <input
                            className="inputStyle"
                            type="tel"
                            ref={(textInput) => this.textInput = textInput}
                            value={valueTel}
                            onChange={this.changeValue.bind(this)}
                        /> 
                        <button onClick={this.focusTextInput}>focus</button>
                        <p>通过recomputed插件对输入值进行计算属性，输入值={valueTel}, 计算后值={getContacts}</p>
                        <p>这个计算属性的值基于上面的计算属性和一个state中的值，结果={getBiggest}</p>
                    </div>
                    <p
                        ref={this.creatRefElement}
                        onClick={this.getCreateRef}
                    >
                        点击我，获取通过createRef()得到的元素
                    </p>
                    <p onClick={this.goMine}>点击我，跳转到我的页面</p>
                    <p onClick={this.add.bind(this)}>点击增加</p>
                    <div>
                        {list.map((item, index) => {
                            return (<p key={index}>{item.name}</p>)
                        })}
                    </div>
                </div>
                <Menu value='this is parentComponent from App' />
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
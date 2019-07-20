import React from 'react'
import '../css/select.scss'
import PropTypes from 'prop-types'; // 设置props中的某个属性的类型



class Select extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            menu: [ '宫爆鸡丁', '小炒肉' ],
        }
        this.childRef = React.createRef()
        this.getRef = this.getRef.bind(this)
        this.childEvent = this.childEvent.bind(this)
    }
    getRef() {
        console.log('print ref', this.childRef)
    }
    childEvent() {
        this.props.parentEvent(this.state.menu)
    }
    render() {
        const props = this.props
        return (
            <div className='select-container'>
                <div className='select-content'>
                    {this.props.optionList && this.props.optionList.map((item, index) => {
                        return (
                        <div className='selected-item' key={index}>
                            <span/>{item.name}
                        </div>)
                    })}
                </div>
                {this.props.children}
                <span ref={this.childRef} onClick={this.getRef.bind(this)}>{ props.defaultprops }</span>
                <p onClick={this.childEvent}>子组件调用父组件的事件</p>
            </div>
        )
    }
}
// 设置组件的props类型
Select.PropType = {
    optionList: PropTypes.Array
}
// 设置组件的默认值
Select.defaultProps = {
    defaultprops: 'i am default value in props',
    optionList: () => [],
}

export default Select
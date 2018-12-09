import React from 'react'
import '../css/select.scss'
import PropTypes from 'prop-types'; // 设置props中的某个属性的类型


class Select extends React.Component{
    constructor(props) {
        super(props)
        this.childRef = React.createRef()
        this.getRef = this.getRef.bind(this)
    }
    getRef() {
        console.log('print ref', this.childRef.current)
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
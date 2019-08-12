import React, { Component } from 'react'
import '../../css/subFind.scss'


class SubFind extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log(this.props.location.query)
    }
    render() {
        return (
            <div className="subFind-container">
                woshi erjiyemian
            </div>
        )
    }
}

export default SubFind
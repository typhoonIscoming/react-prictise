import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changesecond } from '../model/action'

class Message extends Component{
    render() {
        return (
            <div>
                this is message
            </div>
        )
    }
}

function mapStateToProps(store) {
    return store
}
function mapDispatchProps(dispatch) {
    return {
        changesecond: (args) => dispatch(changesecond(args))
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Message)
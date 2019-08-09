// eslint-disable-next-line
import React, { Component } from 'react';

import { connect } from 'react-redux'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="product-page">
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { product: state.product }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)


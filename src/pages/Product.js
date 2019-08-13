// eslint-disable-next-line
import React, { Component } from 'react';

import { connect } from 'react-redux'
import Menu from '../common/menu'
import '../css/product.scss'

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    
    render() {
        return (
            <div className="product-page">
                <div className="product-content">
                </div>
                <Menu />
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


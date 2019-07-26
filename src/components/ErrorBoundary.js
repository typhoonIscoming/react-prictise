import React, { Component } from 'react'


class ErrorBoundary extends Component{
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        console.log('errorboundary', error)
        
        return { hasError: true }
    }
    componentDidCatch(error, info) {
        console.log('error', error)
        console.log('info', info)
    }
    render() {
        console.log(this.state.hasError)
        if(this.state.hasError) {
            return (
                <div>something went wrong</div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
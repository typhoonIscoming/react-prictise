import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


import './App.scss';


import MainRoute from './router'


// 引入错误边界组件来处理页面中的错误导致页面崩溃的优化
import ErrorBoundary from './components/ErrorBoundary'


import { addTodo } from './model/action/index'

const AppContext = React.createContext({
    value: 'this is Mine context',
    text: '这是Mine组件的context',
})

function mapStateToProps(state) {
    return {
        first: state.first
    };
}

function mapDispatchProps(dispatch) {
  return {
    someAction: (arg) => dispatch(addTodo(arg)),
  };
}

class App extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            ...props,
        }
    }
    render() {
        return (
        <AppContext.Provider value={this.context}>
            <div className="App">
                <ErrorBoundary>
                    <MainRoute />
                </ErrorBoundary>
            </div>
        </AppContext.Provider>
        );
    }
}
App.contextType = AppContext

export default withRouter(connect(mapStateToProps, mapDispatchProps)(App));
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


import './App.scss';


import MainRoute from './router'
import Menu from './common/menu'

// 引入错误边界组件来处理页面中的错误导致页面崩溃的优化
import ErrorBoundary from './components/ErrorBoundary'


import { addTodo } from './model/action/index'


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
  constructor(props) {
    super(props)
    this.state = {
      ...props,
    }
  }
  render() {
    return (
      <ErrorBoundary>
      <div className="App">
        
          <MainRoute />
        
        <Menu value='this is parentComponent from App' />
      </div>
      </ErrorBoundary>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(App));
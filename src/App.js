import React from 'react';
import { withRouter } from 'react-router-dom';

import './App.css';
import MainRoute from './router'

import Menu from './common/menu'

import { connect } from 'react-redux'
import { addTodo } from './model/action/index'


function mapStateToProps(state) {
  console.log('state', state)
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
  render() {
    const { first, someAction } = this.props;
    console.log('first', first)
    console.log('someAction', someAction)
    return (
      <div className="App">
        <MainRoute {...this.props} />
        <Menu value='this is parentComponent from App' />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(App));
import React from 'react';
// import logo from './logo.svg';
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
    const { first, someAction, otherActions } = this.props;
    console.log('first', first)
    console.log('someAction', someAction)
    return (
      <div className="App">
        <MainRoute />
        <Menu value='this is parentComponent from App' />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchProps)(App);

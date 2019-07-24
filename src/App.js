import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


import './App.scss';


import MainRoute from './router'
import Menu from './common/menu'


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
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <MainRoute />
        <Menu value='this is parentComponent from App' />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchProps)(App));
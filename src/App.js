import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MainRoute from './router'
import Menu from './common/menu'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MainRoute />
        <Menu value='this is parentComponent from App' />
      </div>
    );
  }
}

export default App;

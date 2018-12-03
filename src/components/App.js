import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import NewEntry from './NewEntry';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard />
        <NewEntry />
      </div>
    )
  };
};

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import NewEntry from './NewEntry';

import '../index.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <NewEntry />
          <Dashboard />
        </div>
      </div>
    )
  };
};

export default App;

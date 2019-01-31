import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Dashboard from './Dashboard';
import NewEntry from './NewEntry';

import '../index.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
        activities : []
    };
  }

  addActivity = (activity) => {
    let newActivities = [ ...this.state.activities ];

    newActivities.push(activity);

    this.setState({
      activities : newActivities
    })

  } 

  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <NewEntry activities={this.state.activities} addActivity={this.addActivity}/>
          <Dashboard activities={this.state.activities} />
        </div>
      </div>
    )
  };
};

export default App;

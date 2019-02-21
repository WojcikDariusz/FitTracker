import React, { Component } from 'react';

import { 
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';
import App from './App';
import NewEntry from './NewEntry';

export default class Router extends React.Component {

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
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/newEntry" component={NewEntry} />
            </Switch>
        </BrowserRouter>
        )
    };


}
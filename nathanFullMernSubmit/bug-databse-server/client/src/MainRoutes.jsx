import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import List from './components/bugList/List';
import Report from './components/bugReport/Report';

export default class MainRoutes extends Component {
  render() {
    return(
      <div className='mainContent'>
        <main>
        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route path='/bugs' component={() => <List />}/>
          <Route path='/report' component={() => <Report />}/>
        </Switch>
        </main>
      </div>
    );
  }
}

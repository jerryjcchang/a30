import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {puzzle} from './puzzle.js'
import PuzzleComponent from './puzzle';
import { Route, Switch, Redirect, withRouter, Router } from 'react-router-dom';
import { info } from './db'
import Videos from './containers/Videos'

function App() {
  console.log(info)
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/puzzle" component={PuzzleComponent} />
        <Route exact path="/yay" component={Videos} />
      </header>
    </div>
  );
}

export default withRouter(App);

import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {puzzle} from './puzzle.js'
import PuzzleComponent from './puzzle';
import { Route, Switch, Redirect, withRouter, Router } from 'react-router-dom';
import { info } from './db'
import Videos from './containers/Videos'

function App() {

  const puzzles = [
    {header: "Solve this puzzle!", route: "/puzzle", nextRoute: "/puzzle/2", url: "https://cnet3.cbsistatic.com/img/xLgPeuq6CW9A2N2V2kKmhMT6h2o=/1092x0/2019/03/14/dd4d8d9c-5f16-4f6b-a7d8-65a00d095c2c/avengers-endgame-poster-square-crop.jpg"},
    {header: "How about this one?", route: "/puzzle/2", nextRoute: "/puzzle/3", url: "https://lumiere-a.akamaihd.net/v1/images/ct_mickeymouseandfriends_mickey_ddt-16970_4e99445d.jpeg"},
    {header: "One more!", route: "/puzzle/3", nextRoute: "/yay", url: "https://i.imgur.com/X25Rpr9.jpg"}
  ]

  // debugger

  console.log(info)
  return (

    <div className="App">
        {puzzles.map(info =>
          <Route exact path={info.route} render={(props) => {
                                return(<PuzzleComponent
                                          routeProps={props}
                                          url={info.url}
                                          nextRoute={info.nextRoute}
                                          header={info.header}
                                        />)}}
                              />
                            )
        }
        <Route exact path="/yay" component={Videos} />
    </div>
  );
}

export default withRouter(App);

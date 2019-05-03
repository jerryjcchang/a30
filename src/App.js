import React from 'react';
import logo from './logo.svg';
import './App.css';
// import {puzzle} from './puzzle.js'
import PuzzleComponent from './puzzle';
import { Route, Switch, Redirect, withRouter, Router } from 'react-router-dom';
import { info } from './db'
import Videos from './containers/Videos'
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App({location}) {

  const puzzles = [
    {header: "Solve this puzzle!", level: 2, route: "/puzzle", nextRoute: "/puzzle/2", url: "https://cnet3.cbsistatic.com/img/xLgPeuq6CW9A2N2V2kKmhMT6h2o=/1092x0/2019/03/14/dd4d8d9c-5f16-4f6b-a7d8-65a00d095c2c/avengers-endgame-poster-square-crop.jpg"},
    {header: "How about this one?", level: 3, route: "/puzzle/2", nextRoute: "/puzzle/3", url: "https://lumiere-a.akamaihd.net/v1/images/ct_mickeymouseandfriends_mickey_ddt-16970_4e99445d.jpeg"},
    {header: "One more!", level: 4, route: "/puzzle/3", nextRoute: "/", url: "https://i.imgur.com/X25Rpr9.jpg"}
  ]

  // debugger

  console.log(info)
  return (
    <div className="App">
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 3000, exit: 0 }}
          classNames="fade"
        >
        <section className="route-section">
        <Switch location={location}>
        {puzzles.map(info =>
          <Route exact path={info.route} render={(props) => {
                                return(<PuzzleComponent
                                          routeProps={props}
                                          url={info.url}
                                          nextRoute={info.nextRoute}
                                          header={info.header}
                                          level={info.level}
                                        />)}}
                              />
                            )
        }
        
        <Route exact path="/" component={Videos} />
          </Switch>
          </section>
          </CSSTransition>
      </TransitionGroup>
    </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 3000ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 1500ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(App);

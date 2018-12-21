import React, { Component } from 'react';
import './App.css';
import GoalContainer from './GoalContainer';
import LocationContainer from './LocationContainer';
import Login from './Login';
import Header from './Header';
import Footer from './footer';

import Home from './Home';
import { Image, Segment, Container, Icon } from 'semantic-ui-react';

import { Route, Switch } from 'react-router-dom';
const My404 = () =>{
  return(
    <div>
      <h1>You are lost, will you even be found?</h1>
      <h1>page 404</h1>
    </div>
  )
}

class App extends Component {
  render() {
    return (

      <div className="App">

        <Header />

        <div className="form">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path='/crisis' component={LocationContainer}/>
            <Route exact path='/goals'  component={GoalContainer}/>
            <Route component={My404}/>
          </Switch>
        </div>
        <Footer />

      </div>
    );
  }
}

export default App;

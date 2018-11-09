import React, { Component } from 'react';
// import './App.css';
import Goals from './GoalContainer';
import LocationList from './LocationContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="form">
          <Goals />
        </div>

        <div className="location">
          <LocationList />
        </div>
      </div>
    );
  }
}

export default App;

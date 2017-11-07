import React, { Component } from 'react';
import './App.css';

import Schedule from './containers/Schedule';

class App extends Component {
  render() {
    return (
      <div className="appWrapper">
        <Schedule />
      </div>
    );
  }
}

export default App;

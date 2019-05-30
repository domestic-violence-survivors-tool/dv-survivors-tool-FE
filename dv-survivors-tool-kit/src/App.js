import React, { Component } from 'react';
import { render } from "react-dom";

import FormsContainer from './Components/FormsContainer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <FormsContainer />
      </div>
    );
  }
}

export default App;



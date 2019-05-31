import React, { Component } from 'react';
import { render } from "react-dom";
import Accordion from "./Components/Accordion";
import axios from 'axios';

import FormsContainer from './Components/FormsContainer';

import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateData: []
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get('https://bps-dvst.herokuapp.com/state/states')
      .then(res => {
        this.setState({ stateData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <div className="left">
          <Accordion data={this.state.stateData} />
        </div>
        <div className="right">
          <FormsContainer />
        </div>
      </div>
    );
  }
}

export default App;



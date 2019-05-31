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
      stateData: [],
      budgetTotal: 0,
      relocationTotal: 0
    }
  }
  componentDidMount() {
    this.fetchData();
  }

  setBudget = (value) => {
    this.setState({ budgetTotal: value });
  }

  setRelocation = (value) => {
    this.setState({ relocationTotal: value });
  }

  fetchData = () => {
    axios.get('https://bps-dvst.herokuapp.com/state/states')
      .then(res => {
        this.setState({ stateData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { budgetTotal, relocationTotal } = this.state;

    return (
      <div>
        <div className="header">
          FREE FROM
        </div>
        <div className="container">
          <div className="left">
            <Accordion data={this.state.stateData} />
          </div>
          <div className="right">
            <FormsContainer
              setBudget={this.setBudget}
              setRelocation={this.setRelocation}
              budget={budgetTotal}
              relocation={relocationTotal} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;



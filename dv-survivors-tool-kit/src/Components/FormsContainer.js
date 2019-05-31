import React, { Component } from 'react';
import { render } from "react-dom";
import { Route } from "react-router-dom";

import BudgetForm from './BudgetForm';
import RelocationForm from './RelocationForm';

class FormsContainer extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <Route path="/" exact={true} component={BudgetForm} />
        <Route path="/relocation" exact={true} component={RelocationForm} />
      </div>
    );
  }
}

export default FormsContainer;



import React, { Component } from 'react';
import { render } from "react-dom";
import { Route } from "react-router-dom";

import BudgetForm from './BudgetForm';
import RelocationForm from './RelocationForm';
import TotalCosts from './TotalCosts';

class FormsContainer extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { setBudget, setRelocation, budget, relocation } = this.props;

    return (
      <div>
        <Route path="/" exact={true} render={(props) => <BudgetForm {...props} setBudget={setBudget} />} />
        <Route path="/relocation" exact={true} render={(props) => <RelocationForm {...props} setRelocation={setRelocation} />} />
        <Route path="/totals" render={() => <TotalCosts budget={budget} relocation={relocation} />} />
      </div>
    );
  }
}

export default FormsContainer;



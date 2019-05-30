import React, { Component } from 'react';
import { render } from "react-dom";

import BudgetForm from './BudgetForm';
import RelocationForm from './RelocationForm';

const Tabs = ['Budget', 'Relocation'];

class FormsContainer extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 'Budget'
    }
  }

  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  }

  renderTabs = () => {
    const { activeTab } = this.state;

    return (
      <div className="nav-tabs">
        <button className={activeTab === 'Budget' ? 'active' : ''} onClick={() => this.changeTab('Budget')}>
          Budget
        </button>
        <button className={activeTab === 'Relocation' ? 'active' : ''} onClick={() => this.changeTab('Relocation')}>
          Relocation
        </button>
      </div>
    )
  }

  render() {
    const { activeTab } = this.state;

    return (
      <div className="container">
        {this.renderTabs()}
        {activeTab === 'Budget' && <BudgetForm />}
        {activeTab === 'Relocation' && <RelocationForm />}
      </div>
    );
  }
}

export default FormsContainer;



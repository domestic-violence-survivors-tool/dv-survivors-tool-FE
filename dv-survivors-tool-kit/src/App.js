
import './App.css';
import React, { Component } from 'react';   
import BudgetForm from './Components /BudgetForm';
import RelocationForm from './Components /RelocationForm';

class App extends Component {  
  render() {
    return (
      <div className="container">
        <RelocationForm />
        <BudgetForm />
      </div>
    );
  }
}

export default App; 



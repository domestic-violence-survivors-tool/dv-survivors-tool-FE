
import './App.css';
import React, { Component } from 'react';   
import BudgetForm from './Components /BudgetForm';

class App extends Component {  
  render() {
    return (
      <div className="container">
        <h3>Calculater</h3>
        <BudgetForm />
      </div>
    );
  }
}

export default App; 



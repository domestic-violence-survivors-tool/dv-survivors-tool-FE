import React, { Component } from 'react';

class BudgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transportation: 0,
      food: 0,
      healthinsurance: 0,
    }
  }


  handleFormSubmit = () => {
   
  }
  handleClearForm = () => {
   
  }

  handleNumberInput = (e) => {
    const input = e.target;
    const number = parseInt(input.value, 10);
    const value = isNaN(number) ? 0 : number;
    this.setState({ [input.name]: value });
  }

  render() {
    const { transportation, food, healthinsurance } = this.state;
    const total = transportation + food + healthinsurance;

    return (
      <form className="container">
        <label>
          <h5>Transportation</h5>
          <input name="transportation" value={transportation} type="number" onChange={this.handleNumberInput} />
        </label>
        <label>
          <h5>Food</h5>
          <input name="food" value={food} type="number" onChange={this.handleNumberInput} />
        </label>
        <label>
        <label>
          <h5>Health Insurance</h5>
          <input name="healthinsurance" value={healthinsurance} type="number" onChange={this.handleNumberInput} />
        </label>
          <h5>Total</h5>
          {total}
        </label>
      </form>
    );
  }
}

export default BudgetForm;

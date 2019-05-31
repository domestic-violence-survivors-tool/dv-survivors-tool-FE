import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BudgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transportation: 0,
      food: 0,
      healthinsurance: 0,
      carinsurance: 0,
      carloan: 0,
      personalloan: 0,
      cellphonebill: 0,
      rent: 0,
      utilities: 0,
      savings: 0
    }
  }


  handleFormSubmit = () => {

  }
  handleClearForm = () => {

  }

  handleNumberInput = (e) => {
    const input = e.target;
    const number = parseInt(input.value, 10);
    const value = isNaN(number) ? '' : number;
    this.setState({ [input.name]: value });
  }

  render() {
    const { transportation, food, healthinsurance, carinsurance, carloan, personalloan, cellphonebill, rent, utilities, savings } = this.state;
    const total = transportation + food + healthinsurance + carinsurance + carloan + personalloan + cellphonebill + rent + utilities + savings;

    return (
      <div>
        <form className="budgetContainer">
          <label>
            <h1>Monthly Budget</h1>
          </label>
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
            <label>
              <h5>Car Insurance</h5>
              <input name="carinsurance" value={carinsurance} type="number" onChange={this.handleNumberInput} />
            </label>
            <label>
              <h5>Car Loan</h5>
              <input name="carloan" value={carloan} type="number" onChange={this.handleNumberInput} />
            </label>
            <label>
              <h5>Personal Loan</h5>
              <input name="personalloan" value={personalloan} type="number" onChange={this.handleNumberInput} />
            </label>
            <label>
              <h5>Cell Phone Bill</h5>
              <input name="cellphonebill" value={cellphonebill} type="number" onChange={this.handleNumberInput} />
            </label>
            <label>
              <label>
                <h5>Monthly Rent</h5>
                <input name="rent" value={rent} type="number" onChange={this.handleNumberInput} />
              </label>
              <label>
                <h5>Utilities </h5>
                <input name="utilities" value={utilities} type="number" onChange={this.handleNumberInput} />
              </label>
              <h5>Savings Account</h5>
              <input name="savings" value={savings} type="number" onChange={this.handleNumberInput} />
            </label>
            <h5>Total</h5>
            {total}
          </label>
        </form>
        <div>
          <Link to="/relocation">
          <div className="butttonWrapper">
              <button>
                Next!
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default BudgetForm;

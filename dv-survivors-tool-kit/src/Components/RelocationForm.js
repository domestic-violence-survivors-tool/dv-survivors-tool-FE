import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RelocationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hotel: 0,
            rentaldeposit: 0,
            firstmonthsrent: 0,
            utilityconnectionfee: 0,
            storage: 0,
            carrental: 0,
            gasforcar: 0,
            connectionfee: 0,
            movingtruck: 0,
            gasfortruck: 0,
            mentalhealth: 0,
            incomeloss: 0,
            security: 0
        }
    }

    calculateTotal = () => {
        const valuesArray = Object.values(this.state);
        return valuesArray.reduce((prev, curr) => prev + curr);
    }

    handleSubmit = () => {
        this.props.setRelocation(this.calculateTotal());
        this.props.history.push('/totals');
    }

    handleNumberInput = (e) => {
        const input = e.target;
        const number = parseInt(input.value, 10);
        const value = isNaN(number) ? '' : number;
        this.setState({ [input.name]: value });
    }

    render() {
        const { hotel, rentaldeposit, firstmonthsrent, utilityconnectionfee, storage, carrental, gasforcar, connectionfee, movingtruck, gasfortruck, mentalhealth, incomeloss, security } = this.state;
        const total = this.calculateTotal();

        return (
            <div className="formContainer">
                <form>
                    <label>
                        <h1>Relocation Costs</h1>
                    </label>
                    <label>
                        <h5>Hotel Costs</h5>
                        <input name="hotel" value={hotel} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Rental Deposit</h5>
                        <input name="rentaldeposit" value={rentaldeposit} type="number" onChange={this.handleNumberInput} />
                    </label>

                    <label>
                        <h5>First Month's Rent</h5>
                        <input name="firstmonthsrent" value={firstmonthsrent} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Utility Connection Fee</h5>
                        <input name="utilityconnectionfee" value={utilityconnectionfee} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Storage Unit</h5>
                        <input name="storage" value={storage} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Car Rental </h5>
                        <input name="carrental" value={carrental} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Gas For Car Rental</h5>
                        <input name="gasforcar" value={gasforcar} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Cell Phone Connection Fee</h5>
                        <input name="connectionfee" value={connectionfee} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Moving Truck Rental</h5>
                        <input name="movingtruck" value={movingtruck} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Gas for Moving Truck </h5>
                        <input name="gasfortruck" value={gasfortruck} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Mental Health Treatment</h5>
                        <input name="mentalhealth" value={mentalhealth} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Income Loss</h5>
                        <input name="incomeloss" value={incomeloss} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <label>
                        <h5>Cost of Security Measures</h5>
                        <input name="security" value={security} type="number" onChange={this.handleNumberInput} />
                    </label>
                    <h5>Total</h5>
                    {total}
                </form>
                <div className="buttonbox">
                    <button onClick={this.handleSubmit}>
                        Finish
                    </button>
                </div>
            </div>
        );
    }
}

export default RelocationForm;

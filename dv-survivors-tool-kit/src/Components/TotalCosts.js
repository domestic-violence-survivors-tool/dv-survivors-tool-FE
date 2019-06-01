import React from 'react';

class TotalCosts extends React.Component {
    render() {
        return (
            <div className="totals">
                <div>
                    Your monthly Budget is: ${this.props.budget}
                </div>
                <div>
                    Your total cost for Relocation is: ${this.props.relocation}
                </div>
            </div>
        );
    }
}

export default TotalCosts;
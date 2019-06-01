import React from 'react';

class TotalCosts extends React.Component {
  render() {
    return (
      <div className="totals">
        <div>
          Your monthly Budget is: <strong>${this.props.budget}</strong>
        </div>
        <div>
          Your total cost for Relocation is:{' '}
          <strong>${this.props.relocation}</strong>
        </div>
      </div>
    );
  }
}

export default TotalCosts;

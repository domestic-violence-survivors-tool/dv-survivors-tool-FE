import React from 'react';

class TotalCosts extends React.Component {
    render() {
        return (
            <div>
                <div>
                    Budget: {this.props.budget}
                </div>
                <div>
                    Relocation: {this.props.relocation}
                </div>
            </div>
        );
    }
}

export default TotalCosts;
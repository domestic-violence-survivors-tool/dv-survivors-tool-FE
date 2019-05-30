import React from "react";

class AccordionItem extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
    }

    toggle = () => {
        this.setState({
            active: !this.state.active,
            className: "active"
        });
    }

    render() {
        const { data } = this.props;
        const activeClass = this.state.active ? "active" : "inactive";
        const rent = data.rent[0];
        
        return (
            <div className={activeClass} onClick={this.toggle}>
                <span className="summary">{data.state}</span>
                <span className="folding-pannel answer">
                    <span className="stat">Crime Rating: {data.crimeRating}</span>
                    <span className="stat">Studio: ${rent.studioRoomApartmentRent}</span>
                    <span className="stat">One-bedroom Rent: ${rent.oneBedRoomApartmentRent}</span>
                    <span className="stat">Two-bedroom Rent: ${rent.twoBedRoomApartmentRent}</span>
                    <span className="stat">Three-bedroom Rent: ${rent.threeBedRoomApartmentRent}</span>
                </span>
            </div>
        );
    }
}

class Accordion extends React.Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props.data);
        return (
            <div className="Accordion-box">
                <h2>Rent Resource</h2>
                <div className="accordion-container">
                    {this.props.data.map((rec, idx) =>
                        <AccordionItem key={idx} data={rec} />
                    )}
                </div>
            </div>
        )
    
        
    }
}

export default Accordion;
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
        const rent = data.rent;

        const rentData = () => rent.map((rec, idx) => (
            <span className="stat" key={idx}>{rec.renttype}: ${rec.rent}</span>
        ))
        
        return (
            <div className={activeClass} onClick={this.toggle}>
                <span className="summary">{data.state}</span>
                <span className="folding-pannel answer">
                    <span className="stat">Crime Rating: {data.crimeRating}</span>
                    {rentData()}
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
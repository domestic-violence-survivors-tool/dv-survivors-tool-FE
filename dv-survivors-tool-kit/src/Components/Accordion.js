import React from "react";

import { mockData } from '../data';

// update component as necessary based on data shape
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
        return (
            <div className={activeClass} onClick={this.toggle}>
                <span className="summary">{data.state}</span>
                <span className="folding-pannel answer">
                    {data.stateid}
                </span>
            </div>
        );
    }
}

class Accordion extends React.Component {
    render() {
        return (
            <div className="Accordion-box">
                <h2>State Info</h2>
                <div className="accordion-container">
                    {mockData.map((rec, idx) =>
                        <AccordionItem key={idx} data={rec} />
                    )}
                </div>
            </div>
        )
    }
}

export default Accordion;
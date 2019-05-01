import React from "react";
import PropTypes from"prop-types";
import "./Dice.css"


class Dice extends React.Component {
    handleCClick = ()  => {
        this.props.clickHandler(this.props.name);
    };

    render()
    {
        const className = [
            "component-die"
        ]

        return (
            <div className={className.join(" ").trim()}>
                <dice onClick={this.handleClicl}>{this.props.name}</dice>
            </div>
        );
    }    
}

Dice.propType = {
    name: PropTypes.string,
};

export default Dice;
import Dice from "./Dice";
import React from "react";
import PropTypes from "prop-types"

import "./DicePanel.css"

class DicePanel extends React.Component {
    handleClick = diceName => {
        this.props.clickHandler(diceName);
    };

    render() {
        return (
            <div className="component-dice-panel">
                <div>
                    <Dice name="d4" clickHandler={this.handleClick} />
                    <Dice name="d6" clickHandler={this.handleClick} />
                    <Dice name="d8" clickHandler={this.handleClick} />
                    <Dice name="d10" clickHandler={this.handleClick} />
                </div>
                <div>
                    <Dice name="d12" clickHandler={this.handleClick} />
                    <Dice name="d20" clickHandler={this.handleClick} />
                    <Dice name="d100" clickHandler={this.handleClick} />
                </div>
            </div>
        )
    };
}

DicePanel.propTypes = {
    clickHandler: PropTypes.func,
};

export default DicePanel;
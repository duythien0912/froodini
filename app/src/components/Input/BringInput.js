import React, { Component } from "react";
import { connect } from "../store";

class BringInput extends Component {
  handleClickBring = () => {
    if (this.props.eventDataUser.optionData) {
      this.props.submit2();
    }
    this.props.actions.updateOption(this.props.eventDataUser);
  };

  render() {
    return (
      <button
        className="buttonBring buttonSelectionPage"
        style={
          this.props.eventDataUser.optionData
            ? { backgroundColor: "#acc95b", color: "white" }
            : {}
        }
        onClick={this.handleClickBring}
      >
        {this.props.value}
      </button>
    );
  }
}
export default connect(state => ({ eventDataUser: state.eventDataUser }))(
  BringInput
);

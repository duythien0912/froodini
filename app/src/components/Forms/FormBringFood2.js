import React, { Component } from "react";

import checkblack from "../../img/checkblack.png";

class FormBringFood2 extends Component {
  state = {
    selected: "option"
  };

  onSubmit = e => {
    e.preventDefault();
  };
  handleChange = event => {
    this.setState({
      selected: event.target.value
    });
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          style={{ marginTop: "4.1vw", margin: "auto" }}
        >
          <label style={{ marginBottom: "4.1vw" }}>
            <input
              type="radio"
              id="option1"
              name="option1"
              value="option"
              checked={this.state.selected === "option"}
              onChange={this.handleChange}
            />
            <span />
            {this.props.children}
          </label>
          <img
            src={checkblack}
            alt="share"
            width={20}
            style={{
              verticalAlign: "middle",
              filter: "opacity(50%)"
            }}
          />
        </form>
      </div>
    );
  }
}

export default FormBringFood2;

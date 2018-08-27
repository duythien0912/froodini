import React, { Component } from "react";
import { connect } from "../store";

class FormBringFood extends Component {
  state = {
    selected: "4-6"
  };

  componentDidMount = () => {
    this.props.actions.bring(this.state.selected, this.props.data);
  };
  onSubmit = e => {
    e.preventDefault();
  };
  handleChange = event => {
    const data = event.target.value;
    this.setState({
      selected: data
    });
    this.props.actions.bringUpdate(data, this.props.data);
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmit}
          style={{ marginTop: "4.1vw", width: "60%", margin: "auto" }}
        >
          <label style={{ marginBottom: "4.1vw" }}>
            <input
              type="radio"
              id="option1"
              name="option1"
              value="2-4"
              checked={this.state.selected === "2-4"}
              onChange={this.handleChange}
            />
            <span />
            2-4
          </label>
          <label style={{ float: "right" }}>
            <input
              type="radio"
              id="option2"
              name="option2"
              value="4-6"
              checked={this.state.selected === "4-6"}
              onChange={this.handleChange}
            />
            <span />
            4-6
          </label>
          <br />
          <br />
          <label>
            <input
              type="radio"
              id="option3"
              name="option3"
              value="6-8"
              checked={this.state.selected === "6-8"}
              onChange={this.handleChange}
            />
            <span />
            6-8
          </label>
          <label style={{ float: "right", width: "48px" }}>
            <input
              type="radio"
              id="option4"
              name="option4"
              value="8+"
              checked={this.state.selected === "8+"}
              onChange={this.handleChange}
            />
            <span />
            8+
          </label>
        </form>
      </div>
    );
  }
}

export default connect(state => ({ option: state.option }))(FormBringFood);

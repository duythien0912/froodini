import React from "react";
import InlineError from "../Messages/InlineError";
import { connect } from "../store";

class FormAddNewItem extends React.Component {
  state = {
    data: {
      header: "",
      picture: "",
      description: "",
      price: "",
      showItemPrice: false
    },
    errors: {},
    loading: false
  };
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: true
      });
      this.addParticipant();
      this.props.submitData();
    }
  };

  async addParticipant() {
    await this.props.actions.addParticipant(this.state.data);
    this.setState({ loading: false });
  }

  validate = data => {
    const errors = {};
    if (!data.header) errors.header = "header can't not be black";
    if (!data.picture) errors.picture = "picture can't not be black";
    return errors;
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Header:
            <input
              style={{
                border: "none",
                borderBottom: "1px solid",
                width: "100%",
                minWidth: "50vw"
              }}
              type="text"
              id="header"
              name="header"
              value={data.header}
              onChange={this.onChange}
            />
            {errors.header && <InlineError text={errors.header} />}
          </label>
          <br />
          <label>
            Picture:
            <input
              style={{
                border: "none",
                borderBottom: "1px solid",
                width: "100%"
              }}
              type="text"
              id="picture"
              name="picture"
              value={data.picture}
              onChange={this.onChange}
            />
          </label>
          <br />

          <label>
            Description:
            <input
              style={{
                border: "none",
                borderBottom: "1px solid",
                width: "100%"
              }}
              type="text"
              id="description"
              name="description"
              value={data.description}
              onChange={this.onChange}
            />
          </label>
          <br />

          <label>
            Price:
            <input
              style={{
                border: "none",
                borderBottom: "1px solid",
                width: "100%"
              }}
              type="text"
              id="price"
              name="price"
              value={data.price}
              onChange={this.onChange}
            />
          </label>
          <br />

          <label>
            Show Item Price:
            <input
              type="checkbox"
              id="showItemPrice"
              name="showItemPrice"
              value={data.showItemPrice}
              onChange={this.onChange}
            />
          </label>
          <br />

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default connect(state => ({ item: state.item }))(FormAddNewItem);

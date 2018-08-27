import React from "react";
import InlineError from "../Messages/InlineError";
import { connect } from "../store";

import { Button, Form,Checkbox } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FormAddNew extends React.Component {
  state = {
    data: {
      header: "",
      picture: "",
      description: "",
      price: "",
      showitemprice: "",
      sortingscore:"",
      externallink : ""
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
      alert("Update successful");
    }
  };

  async addParticipant() {

    await this.props.actions.addParticipant(this.state.data);
    this.setState({ loading: true });
    window.location.reload();


  }

  validate = data => {
    const errors = {};
    return errors;
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <label>
            Header:
            <Form.Input
              type="text"
              id="header"
              required 
              name="header"
              value={data.header}
              onChange={this.onChange}
            />
            {errors.header && <InlineError text={errors.header} />}
          </label>
          <br />
          <label>
            Picture:
            <Form.Input              
              type="text"
              id="picture"
              name="picture"
              required 
              value={data.picture}
              onChange={this.onChange}
            />
          </label>
          <br />

          <label>
            Description:
            <Form.Input
              type="text"
              id="description"
              required 
              name="description"
              value={data.description}
              onChange={this.onChange}
            />
          </label>
          <br />

          <label>
            Price:
            <Form.Input
              type="text"
              id="price"
              required 
              name="price"
              value={data.price}
              onChange={this.onChange}
            />
          </label>
          <br />
          <label>
            Sorting Score:
            <Form.Input
              type="text"
              id="sortingscore"
              required 
              name="sortingscore"
              value={data.sortingscore}
              onChange={this.onChange}
            />
          </label>
          <br />
          <label>
            External Link:
            <Form.Input
              type="text"
              id="externallink"
              required 
              name="externallink"
              value={data.externallink}
              onChange={this.onChange}
            />
          </label>
          <br />
          <label>
            Show Item Price:
            <Checkbox
              id="showitemprice"
              name="showitemprice"
              value={data.showitemprice}
              onChange={this.onChange}
            />
          </label>
          <br />

          <Button type="submit" value="Save" >Save</Button>
        </Form>
      </div>
    );
  }
}

export default connect(state => ({ item: state.item }))(FormAddNew);

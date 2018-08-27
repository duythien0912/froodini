import React from "react";
import axios from "axios";
import { connect } from "../store";
import 'semantic-ui-css/semantic.min.css';
import {  Button, Form } from 'semantic-ui-react';

class FormAddUser extends React.Component {
  state = {
    data: {
      _id: "",
      fristname: "",
      lastname:"",
      email: "",
      avatarurl:""
    },
    errors: {},
    loading: false
  };
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = async e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: true
      });
      await axios.post("/api/user", this.state.data);
      this.props.submitData();
    }
  };

  handleChange = event => {
    this.setState({
      data: {
        ...this.state.data,
        type: event.target.value
      }
    });
  };

  validate = data => {
    const errors = {};
    return errors;
  };
  render() {
    const { data } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
        <label>
            Frist Name:
            <Form.Input
              
              type="text"
              id="fristname"
              name="fristname"
              value={data.fristname}
              onChange={this.onChange}
            />
      
          </label>

          <label>
           Last Name:
            <Form.Input
              type="text"
              id="lastname"
              name="lastname"
              value={data.lastname}
              onChange={this.onChange}
            />
      
          </label>

           <label>
           Email:
            <Form.Input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={this.onChange}
            />
      
          </label>

           <label>
           Avtar Url:
            <Form.Input
              type="text"
              id="avatarurl"
              name="avatarurl"
              value={data.avatarurl}
              onChange={this.onChange}
            />
      
          </label>


          <br />
          <br />
          <Button type="submit" value="Save" >Save</Button>
        </Form>
      </div>
    );
  }
}

export default connect(state => ({ item: state.item }))(FormAddUser);

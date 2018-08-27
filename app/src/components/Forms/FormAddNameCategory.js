import React from "react";
import InlineError from "../Messages/InlineError";
import { connect } from "../store";
import axios from "axios";

import { Button, Form,Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FormAddNameCategory extends React.Component {
  state = {
    data: {
      nameCategory: "",
      namedish: "",
      content: "",
      urlimg: "",
      timeborn: "",
      color: ""
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
        await axios.post("/api/category", this.state.data);
        this.props.submitData();
        window.location.reload();
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
    const { data, errors } = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
          <label>
          Name Category:
            <Form.Input
              type="text"
              id="nameCategory"
              name="nameCategory"
              required
              value={data.nameCategory}
              onChange={this.onChange}
            />
            {errors.header && <InlineError text={errors.header} />}
          </label>
          <br />
          <label>
          Name Dish:
            <Form.Input              
              type="text"
              id="namedish"
              name="namedish"
              required
              value={data.namedish}
              onChange={this.onChange}
            />
          </label>
          <br />

          <label>
          Content:
            <Form.Input
              type="text"
              id="content"
              name="content"
              required
              value={data.content}
              onChange={this.onChange}
            />
          </label>
          <br />

          <label>
          Url Img:
            <Form.Input
              type="text"
              id="urlimg"
              name="urlimg"
              required
              value={data.urlimg}
              onChange={this.onChange}
            />
          </label>
          <br />

          <label>
          Time Born:
          <Form.Input
              type="date"
              id="timeborn"
              name="timeborn"
              required
              value={data.timeborn}
              onChange={this.onChange}
            />
          </label>
          <br />

            <label>
            Color:
          <input
              type="color"
              id="color"
              name="color"
              required
              value={data.color}
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

export default connect(state => ({ item: state.item }))(FormAddNameCategory);

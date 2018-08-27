import React from "react";
import axios from "axios";
import InlineError from "../Messages/InlineError";
import { connect } from "../store";
import { Button, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FormAddNewFood extends React.Component {
  state = {
    data: {
      name: "",
      image: "",
      description: "",
      type: "food",
      sortingscore:"",
      active:false
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
        await axios.post("/api/food", this.state.data);
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
            Name:
            <Form.Input
             
              type="text"
              id="name"
              name="name"
              required
              value={data.name}
              onChange={this.onChange}
            />
            {errors.name && <InlineError text={errors.name} />}
          </label>
          <br />
          <label>
            Picture:
            <Form.Input
              type="text"
              id="image"
              name="image"
              required
              value={data.image}
              onChange={this.onChange}
            />
          </label>
          <br />

          <label>
            Description:
            <Form.Input
              type="text"
              id="description"
              name="description"
              required
              value={data.description}
              onChange={this.onChange}
            />
          </label>
          <br />
          <label>
            Type:
            <select value={data.type} onChange={this.handleChange}>
              <option value="food">food</option>
              <option value="beverages">beverages</option>
            </select>
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
            Active:
            <Form.Checkbox
              id="active"
              name="active"
              value={data.active}
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

export default connect(state => ({ item: state.item }))(FormAddNewFood);

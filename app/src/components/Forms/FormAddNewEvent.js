import React from "react";
import axios from "axios";
import InlineError from "../Messages/InlineError";
import { connect } from "../store";
import { Button, Form,Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class FormAddNewEvent extends React.Component {
  state = {
    data: {
      _id: "",
      name: "",
      place:"",
      title: "",
      color: "",
      category: "",
      date: "",
      time: "",
      description:"",
      imageurl:"",
      thumbnailurl:"",
      linkevent:""
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
      await axios.post("/api/event", this.state.data);
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
              required
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={this.onChange}
            />
            {errors.header && <InlineError text={errors.header} />}
          </label>

          <label>
            Title:
            <Form.Input
              required
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={this.onChange}
            />
           
          </label>
          <br/>
          <label>
          Color:
            <input
              required
              type="color"
              id="color"
              name="color"
              value={data.color}
              onChange={this.onChange}
            />
           
          </label>
          <br/>
           <label>
          Category:
            <Form.Input
              required
              type="text"
              id="category"
              name="category"
              value={data.category}
              onChange={this.onChange}
            />
           
          </label>
          <label>
          Place:
            <Form.Input
             required
              type="text"
              id="place"
              name="place"
              value={data.place}
              onChange={this.onChange}
            />
           
          </label>
          <label>
          Event url:
            <Form.Input
              required
              type="text"
              id="linkevent"
              name="linkevent"
              value={data.linkevent}
              onChange={this.onChange}
            />
           
          </label>
          <label>
          Date:
            <Form.Input
              required
              type="date"
              id="date"
              name="date"
              value={data.date}
              onChange={this.onChange}
            />
           
          </label>
          <label>
           Time:
            <Form.Input
              required
              type="time"
              id="time"
              name="time"
              value={data.time}
              onChange={this.onChange}
            />
           
          </label>

          <label>
          ImageUrl:
            <Form.Input
              required
              type="text"
              id="imageurl"
              name="imageurl"
              value={data.imageurl}
              onChange={this.onChange}
            />
           
          </label>

          <label>
          Thumbnail Url:
            <Form.Input
              required
              type="text"
              id="thumbnailurl"
              name="thumbnailurl"
              value={data.thumbnailurl}
              onChange={this.onChange}
            />
           
          </label>
          <label>
          Description:
            <Form.Input
              required
              type="text"
              id="description"
              name="description"
              value={data.description}
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

export default connect(state => ({ item: state.item }))(FormAddNewEvent);

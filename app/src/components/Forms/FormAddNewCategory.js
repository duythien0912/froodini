import React from "react";
import axios from "axios";
import InlineError from "../Messages/InlineError";
import { connect } from "../store";


class DocumentInput extends React.Component {

  render() {
    return (
      <label>
            Name:
            <input
              style={{
                border: "none",
                borderBottom: "1px solid",
              }}
              type="text"
              id="name"
              name={ `document-${ this.props.index }-document` } 
            />
          </label>
    );
  }
}


class FormAddNewCategory extends React.Component {
  state = {
    data: {
      name: "",
      image: "",
      description: "",
      type: "food"
    },
    errors: {},
    loading: false,
    documents: []
  };
  constructor(props){
    super(props);

    this.add = this.add.bind(this);
  }
  add() {
    const documents = this.state.documents.concat(DocumentInput);
    this.setState({ documents });
  }
 

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
      // this.props.submitData();
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
    if (!data.name) errors.name = "name can't not be black";
    if (!data.image) errors.image = "image can't not be black";
    return errors;
  };
  render() {
    const documents = this.state.documents.map((Element, index) => <Element key={ index } index={ index } />);
    const { data, errors } = this.state;
    return (
      <div>
        <button onClick={ this.add }>Add</button>
        <div className="inputs">
          { documents }
        </div>
        <form onSubmit={this.onSubmit}>
          <label>
            Name:
            <input
              style={{
                border: "none",
                borderBottom: "1px solid",
                width: "100%",
                minWidth: "50vw"
              }}
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
            <input
              style={{
                border: "none",
                borderBottom: "1px solid",
                width: "100%"
              }}
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
            <input
              style={{
                border: "none",
                borderBottom: "1px solid",
                width: "100%"
              }}
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

          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default connect(state => ({ item: state.item }))(FormAddNewCategory);

import React from "react";
import { withStyles } from "material-ui/styles";
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";

import Divider from "material-ui/Divider";
import Checkbox from "material-ui/Checkbox";
import { connect } from "../store";

import 'semantic-ui-css/semantic.min.css';
import {  Button, Form,Image } from 'semantic-ui-react';

const styles = theme => ({
  root: {},
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%",
    padding: "5px"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  img: {
    width: "10vw",
    height: "10vw"
  },
  ExpansionPanelSummary: {
    paddingRight: `${theme.spacing.unit * 4}px`
  }
});

class FormDashBoard extends React.Component {
  state = {
    data: {
      _id: this.props.data._id ? this.props.data._id : "",
      buttonText: this.props.data.buttonText ? this.props.data.buttonText : "",
      header: this.props.data.header ? this.props.data.header : "",
      picture: this.props.data.picture ? this.props.data.picture : "",
      description: this.props.data.description
        ? this.props.data.description
        : "",
      price: this.props.data.price ? this.props.data.price : "",
      showItemPrice: this.props.data.showItemPrice
        ? this.props.data.showItemPrice
        : false
    },
    errors: {}
  };
  onChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: true
      });
      this.updateItem();
    }
  };
  submitDelete = async e => {
    this.setState({
      loading: true
    });
    await this.props.actions.deleteItem(this.state.data);
    this.setState({ loading: false });
  };

  async updateItem() {
    await this.props.actions.updateItem(this.state.data);
    this.setState({ loading: false });
  }

  validate = data => {
    const errors = {};
    if (!data.header) errors.header = "header can't not be black";
    return errors;
  };
  render() {
    const { classes } = this.props;
    const { data } = this.state;
    return (
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            className={classes.ExpansionPanelSummary}
          >
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                {`${data._id.substr(0, 10)} ...`}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                {data.buttonText}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                {data.header}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                <Image
                  className={classes.img}
                  src={data.picture}
                  alt={data.picture}
                  circular
                />
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                {`${data.description.substr(0, 20)} ...`}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                {data.price}
              </Typography>
            </div>
            <div className={classes.column}>
              <Checkbox checked={data.showItemPrice} value={data._id} />
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <Form onSubmit={this.onSubmit} style={{ width: "100%" }}>
              <p>Header: </p>
              <Form.Input
                className="textH1"
                type="text"
                id="header"
                name="header"
                value={data.header}
                onChange={this.onChange}
              />
              <br />

              <p>Picture: </p>

              <Form.Input
                className="textH1"
                type="text"
                id="picture"
                name="picture"
                value={data.picture}
                onChange={this.onChange}
              />
              <br />
              <p>Description: </p>

              <Form.Input
                className="textH1"
                type="text"
                id="description"
                name="description"
                value={data.description}
                onChange={this.onChange}
              />
              <br />
              <p>Price: </p>
              <Form.Input
                className="textH1"
                type="text"
                id="price"
                name="price"
                value={data.price}
                onChange={this.onChange}
              />
              <br />
              <p>Show Item Price: </p>

              <Form.Input
                className="textH1"
                type="checkbox"
                id="showItemPrice"
                name="showItemPrice"
                checked={data.showItemPrice}
                value={data.showItemPrice}
                onChange={this.onChange}
              />

              <Button size="small" onClick={this.submitDelete}>
                Detete
              </Button>

              <Button size="small" type="submit" color="primary">
                Update
              </Button>
            </Form>{" "}
          </ExpansionPanelDetails>
          <Divider />
        </ExpansionPanel>
      </div>
    );
  }
}
export default connect(state => ({ item: state.item }))(
  withStyles(styles)(FormDashBoard)
);

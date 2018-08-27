import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
  TableHead
} from "material-ui/Table";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Paper from "material-ui/Paper";
import axios from "axios";

import InlineError from "../Messages/InlineError";
import TablePaginationActionsWrapped from "./TablePaginationActionsWrapped";
import 'semantic-ui-css/semantic.min.css';
import {  Button, Form,Image,Checkbox } from 'semantic-ui-react';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: "auto"
  },
  TableCell: {
    border: "none"
  },
  img: {
    width: "10vw",
    height:"10vw"
  },
  column: {
    flexBasis: "33.33%",
    padding: "5px"
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class TableFood extends Component {
  state = {
    data: [],
    page: 0,
    rowsPerPage: 5,
    datainput: {
      _id: "",
      name: "",
      image: "",
      description: "",
      type: "",
      sortingscore:"",
      active:""
    },
    loading: false,
    errors: {}
  };

  componentDidMount = async () => {
    this.getData();
  };

  onChange = e => {
    this.setState({
      datainput: {
        ...this.state.datainput,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value
      }
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const errors = this.validate(this.state.datainput);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: true
      });
      await axios.put(
        `/api/food/${this.state.datainput._id}`,
        this.state.datainput
      );
      this.getData();
      alert("Update successful");
    }
  };
  onClickMore = n => {
    this.setState({
      datainput: n
    });
  };
  getData() {
    axios.get(`/api/food`).then(data => {
      this.setState({
        data: data.data
      });
    });
  }
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  submitDelete = async _id => {
    this.setState({
      loading: true
    });
    
    await axios.delete(`/api/food/${this.state.datainput._id}`);

    this.getData();
    this.setState({ loading: false });
  };

  validate = datainput => {
    const errors = {};
    return errors;
  };

  render() {
    const { classes } = this.props;
    const { data, rowsPerPage, page, datainput, errors } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Sorting Score</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <Table className={classes.table}>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => (
                  <ExpansionPanel key={n._id}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      onClick={() => this.onClickMore(n)}
                    >
                      <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                          {n.name}
                        </Typography>
                      </div>

                      <div className={classes.column}>
                        <Image
                          className={classes.img}
                          src={n.image}
                          alt={n.image}
                          circular
                        />
                      </div>

                      <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                          {n.description}
                        </Typography>
                      </div>

                      <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                          {n.type}
                        </Typography>
                      </div>
                      <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                          {n.sortingscore}
                        </Typography>
                      </div>
                      <div className={classes.column}>
                        <Checkbox checked={n.active} value={n._id} />
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Form onSubmit={this.onSubmit} style={{ width: "100%" }}>
                        <p>Name: </p>
                        <Form.Input
                          className="textH1"
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={datainput.name}
                          onChange={this.onChange}
                        />
                        {errors.name && <InlineError text={errors.name} />}

                        <br />

                        <p>Picture: </p>
                        <Form.Input
                          className="textH1"
                          type="text"
                          id="image"
                          name="image"
                          required
                          value={datainput.image}
                          onChange={this.onChange}
                        />
                        <br />

                        <p>Description: </p>

                        <Form.Input
                          className="textH1"
                          type="text"
                          id="description"
                          name="description"
                          required
                          value={datainput.description}
                          onChange={this.onChange}
                        />
                        <br />
                        <p>Type: </p>
                        <select value={datainput.type} onChange={this.handleChange}>
                          <option value="food">food</option>
                          <option value="beverages">beverages</option>
                        </select>
                        <br />

                      <p>Sorting Score: </p>

                      <Form.Input
                        className="textH1"
                        type="text"
                        id="sortingscore"
                        name="sortingscore"
                        required
                        value={datainput.sortingscore}
                        onChange={this.onChange}
                      />  
                        <br />

                        <p>Active: </p>

                        <Form.Input
                          className="textH1"
                          type="checkbox"
                          id="active"
                          name="active"
                          checked={datainput.active}
                          value={datainput.active}
                          onChange={this.onChange}
                        />
                        <br/>
                        <Button
                          size="small"
                          type="button"
                          onClick={() => this.submitDelete(n._id)}
                        >
                          Detete
                        </Button>

                        <Button size="small" type="submit" color="primary">
                          Update
                        </Button>
                      </Form>{" "}
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                ))}
            </TableBody>

            {emptyRows > 0 && (
              <TableRow style={{ height: 48 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  Actions={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(TableFood);

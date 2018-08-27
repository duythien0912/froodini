import React, { Component } from "react";
import withStyles from "material-ui/styles/withStyles";
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
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Paper from "material-ui/Paper";
import axios from "axios";
import Checkbox from "material-ui/Checkbox";
import InlineError from "../Messages/InlineError";
import TablePaginationActionsWrapped from "./TablePaginationActionsWrapped";
import Typography from "material-ui/Typography";

import 'semantic-ui-css/semantic.min.css';
import {  Button, Form,Image } from 'semantic-ui-react';

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

class TableEvent extends Component {
  state = {
    data: [],
    page: 0,
    rowsPerPage: 5,
    datainput: {
      _id: "",
      name: "",
      title: "",
      Color: "",
      category: "",
      date: "",
      time: "",
      place: "",
      description:"",
      thumbnailurl:"",
      imageurl:"",
      active: false,
      linkevent:""
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
        `/api/event/${this.state.datainput._id}`,
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
    axios.get("/api/event").then(data => {
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
    
    await axios.delete(`/api/event/${this.state.datainput._id}`);

    this.getData();

    this.setState({ loading: false });
  };

  validate = datainput => {
    const errors = {};
   // if (!datainput.name) errors.name = "name can't not be black";
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
                <TableCell>Title</TableCell>
                <TableCell>Event Url</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Place</TableCell>
                <TableCell>Color</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>ThumbnailUrl</TableCell>
                <TableCell>ImageUrl</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Active</TableCell>               
              </TableRow>
            </TableHead>
          </Table>
          <Table className={classes.table}>
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => (
                  <TableRow key={n._id}>
                    <ExpansionPanel>
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
                            <Typography className={classes.secondaryHeading}>
                                {n.title}
                            </Typography>
                            </div>

                              <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {n.category}
                            </Typography>
                            </div>

                            <div className={classes.column} style={{'word-break':"break-word"}}>
                            <Typography className={classes.secondaryHeading}>
                                {n.linkevent}
                            </Typography>
                            </div>
                            <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {n.date}
                            </Typography>
                            </div>
                            <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {n.time}
                                </Typography>
                            </div>
                            <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {n.place}
                                </Typography>
                            </div>
                            <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {n.color}
                                </Typography>
                            </div>
                              
                            <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {n.category}
                                </Typography>
                            </div>
                            <div className={classes.column}>
                              <Image
                                className={classes.img}
                                src={n.thumbnailurl}
                                alt={n.thumbnailurl}
                                circular
                              />                             
                              </div>
                              <div className={classes.column}>
                              <Image
                                className={classes.img}
                                src={n.imageurl}
                                alt={n.imageurl}
                                circular
                              />                             
                              </div>
                              <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                                {n.description
                                  ? n.description
                                  : ""}
                              </Typography>
                              </div>
                              <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>
                              <Checkbox checked={n.active} value={n._id} />
                              </Typography>
                              </div>
                          
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Form
                          onSubmit={this.onSubmit}
                          style={{ width: "100%" }}
                        >
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

                          <p>Title: </p>
                          <Form.Input
                            className="textH1"
                            type="text"
                            id="title"
                            required
                            name="title"
                            value={datainput.title}
                            onChange={this.onChange}
                          />

                           <br />

                            <p>Category: </p>
                            <Form.Input
                            className="textH1"
                            type="text"
                            id="category"
                            required
                            name="category"
                            value={datainput.category}
                            onChange={this.onChange}
                            />
                            <br />

                          <p>Event Url: </p>
                          <Form.Input
                            className="textH1"
                            type="text"
                            id="linkevent"
                            required
                            name="linkevent"
                            value={datainput.linkevent}
                            onChange={this.onChange}
                          />
                          <br />
                          <p>Date: </p>
                          <Form.Input
                            className="textH1"
                            type="date"
                            id="date"
                            required
                            name="date"
                            value={datainput.date}
                            onChange={this.onChange}
                          />
                          <br />
                          <p>Time: </p>
                          <Form.Input
                            className="textH1"
                            type="time"
                            id="time"
                            required
                            name="time"
                            value={datainput.time}
                            onChange={this.onChange}
                          />
                          <br />
                          <p>Place: </p>
                          <Form.Input
                            className="textH1"
                            type="text"
                            id="place"
                            required
                            name="place"
                            value={datainput.place}
                            onChange={this.onChange}
                          />
                          <br />
                          <p>Color: </p>
                          <input
                            className="textH1"
                            type="color"
                            id="color"
                            required
                            name="color"
                            value={datainput.color}
                            onChange={this.onChange}
                          />
                          <br />

                          <p>ThumbnailUrl: </p>

                          <Form.Input
                            className="textH1"
                            type="text"
                            id="thumbnailurl"
                            required
                            name="thumbnailurl"
                            value={datainput.thumbnailurl}
                            onChange={this.onChange}
                          />
                          <br />
                          <p>ImageUrl: </p>

                          <Form.Input
                          className="textH1"
                          type="text"
                          id="imageurl"
                          name="imageurl"
                          required
                          value={datainput.imageurl}
                          onChange={this.imageurl}
                          />
                          <br />
                          <p>Description: </p>

                          <Form.Input
                          className="textH1"
                          type="text"
                          id="description"
                          required
                          name="description"
                          value={datainput.description}
                          onChange={this.description}
                          />
                          <br />
                          <p>Active: </p>

                          <Form.Checkbox checked={datainput.active} value={n._id} />

                          <br />
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
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
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

export default withStyles(styles)(TableEvent);

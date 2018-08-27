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
  column1: {
    flexBasis: "33.33%",
    padding: "5px",
    textAlign: 'center'
  },
  column2: {
    flexBasis: "33.33%",
    padding: "5px",
    marginLeft:"20px",
    textAlign: 'center'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class TableCategoryName extends Component {
  state = {
    data: [],
    page: 0,
    rowsPerPage: 5,
    datainput: {
      _id: "",
      nameCategory: "",
      namedish: "",
      content: "",
      urlimg: "",
      timeborn: "",
      color: "",
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
        `/api/category/${this.state.datainput._id}`,
        this.state.datainput
      );
      this.getData();
      alert("Update successful");
    }
  };
  onClickMore = n => {
    this.setState({
      datainput: {
        _id:n._id,
        nameCategory:n.nameCategory,
        namedish:n.data[0].namedish,
        content:n.data[0].content,
        urlimg:n.data[0].urlimg,
        timeborn:n.data[0].timeborn,
        color:n.data[0].color
      }
    });
  };
  getData() {
    axios.get(`/api/category`).then(data => {
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
    await axios.delete(`/api/category/${_id}`);
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
                <TableCell>Name Category</TableCell>
                <TableCell>Name Dish</TableCell>
                <TableCell>Content</TableCell>
                <TableCell>Url Image</TableCell>
                <TableCell>Time Born</TableCell>
                <TableCell>Color</TableCell>
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
                          {n.nameCategory}
                        </Typography>
                      </div>

                      <div className={classes.column1}>
                        <Typography className={classes.secondaryHeading}>
                          {n.data[0].namedish}
                        </Typography>
                      </div>

                      <div className={classes.column1}>
                        <Typography className={classes.secondaryHeading}>
                          {n.data[0].content}
                        </Typography>
                      </div>

                     
                      <div className={classes.column2}>
                              <Image
                                className={classes.img}
                                src= {n.data[0].urlimg}
                                alt= {n.data[0].urlimg}
                                circular
                              />                             
                        </div>

                       <div className={classes.column2}>
                        <Typography className={classes.secondaryHeading}>
                          {n.data[0].timeborn}
                        </Typography>
                      </div>

                      <div className={classes.column2}>
                        <Typography className={classes.secondaryHeading}>
                          {n.data[0].color}
                        </Typography>
                      </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Form onSubmit={this.onSubmit} style={{ width: "100%" }}>
                        <p>Name Category: </p>
                        <Form.Input
                          className="textH1"
                          type="text"
                          required
                          id="nameCategory"
                          name="nameCategory"
                          value={datainput.nameCategory}
                          onChange={this.onChange}
                        />
                      

                        <br />

                        <p>Name Dish: </p>
                        <Form.Input
                          className="textH1"
                          type="text"
                          required
                          id="namedish"
                          name="namedish"
                          value={datainput.namedish}
                          onChange={this.onChange}
                        />
                        <br/>
                        
                        <p>Content: </p>

                        <Form.Input
                          className="textH1"
                          type="text"
                          required
                          id="content"
                          name="content"
                          value={datainput.content}
                          onChange={this.onChange}
                        />
                        <br />
                       
                          <p>Url Image: </p>
                          <input
                            className="textH1"
                            type="text"
                            required
                            id="urlimg"
                            name="urlimg"
                            value={datainput.urlimg}
                            onChange={this.onChange}
                          />
                         <br />
                        <p>Time Born: </p>

                        <Form.Input
                          className="textH1"
                          type="date"
                          required
                          id="timeborn"
                          name="timeborn"
                          value={datainput.timeborn}
                          onChange={this.onChange}
                        />
                        <br />
                        <p>Color: </p>

                        <Form.Input
                          className="textH1"
                          type="color"
                          required
                          id="color"
                          name="color"
                          value={datainput.color}
                          onChange={this.onChange}
                        />
                        <br />
                        <Button
                          size="small"
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

export default withStyles(styles)(TableCategoryName);

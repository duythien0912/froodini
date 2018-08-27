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
import Typography from "material-ui/Typography";

import axios from "axios";
import 'semantic-ui-css/semantic.min.css';
import {  Button, Form } from 'semantic-ui-react';



import TablePaginationActionsWrapped from "./TablePaginationActionsWrapped";

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
    width: "10vw"
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

class TableUser extends Component {
  state = {
    data: [],
    page: 0,
    rowsPerPage: 5,
    datainput: {
      _id: "",
      fristname: "",
      lastname: "",
      email: "",
      avatarurl: ""
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
        `api/user/${this.state.datainput._id}`,
        this.state.datainput
      );
      this.getData();
    }
  };
  onClickMore = n => {
    this.setState({
      datainput: n
    });
  };
  getData() {
    axios.get("/api/user").then(data => {
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
    await axios.delete(`api/user/${_id}`);
    this.getData();
    this.setState({ loading: false });
  };

  validate = datainput => {
    const errors = {};
    return errors;
  };

  render() {
    const { classes } = this.props;
    const { data, rowsPerPage, page, datainput } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Frist Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Avtar Url</TableCell>
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
                                  {n.fristname}
                        </Typography>
                         </div>
                         <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                                {n.lastname}
                        </Typography>
                         </div>
                         <div className={classes.column}>
                        <Typography className={classes.secondaryHeading}>
                                {n.email}
                        </Typography>
                         </div>
                         <div className={classes.column}>
                              <img
                                className={classes.img}
                                src={n.avatarurl}
                                alt={n.avatarurl}
                              />                             
                              </div>
                       
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Form
                          onSubmit={this.onSubmit}
                          style={{ width: "100%" }}
                        >
                          <p>Frist Name: </p>
                          <Form.Input
                            className="textH1"
                            type="text"
                            id="fristname"
                            name="fristname"
                            value={datainput.fristname}
                            onChange={this.onChange}
                          />
                          <br/>
                          <p>Last Name: </p>
                          <Form.Input
                            className="textH1"
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={datainput.lastname}
                            onChange={this.onChange}
                          />
                          <br/>
                          <p>Email: </p>
                          <Form.Input
                            className="textH1"
                            type="email"
                            id="email"
                            name="email"
                            value={datainput.email}
                            onChange={this.onChange}
                          />
                          <br/>
                          <p>Avtar Url: </p>
                          <Form.Input
                            className="textH1"
                            type="text"
                            id="avatarurl"
                            name="avatarurl"
                            value={datainput.avatarurl}
                            onChange={this.onChange}
                          />
                          <br/>
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

export default withStyles(styles)(TableUser);

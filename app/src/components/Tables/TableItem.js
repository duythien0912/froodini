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

class TableItem extends Component {
  state = {
    data: [],
    page: 0,
    rowsPerPage: 5,
    datainput: {
      _id: "",
      buttonText: "",
      header: "",
      picture: "",
      description: "",
      price:"",
      showitemprice: "",
      link: "" ,
      sortingscore:""
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
        `/api/item/${this.state.datainput._id}`,
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
    axios.get(`/api/item`).then(data => {
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
    await axios.delete(`api/item/${this.state.datainput._id}`);
    this.getData();
    this.setState({ loading: false });
    alert('Delete Item Sucessfull');
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
                <TableCell>Id</TableCell>
                <TableCell>Header</TableCell>
                <TableCell>Picture</TableCell>
                <TableCell>Description</TableCell>             
                <TableCell>Price</TableCell>
                <TableCell>Show Item Price</TableCell>
                <TableCell>External Link</TableCell>
                <TableCell>Sorting Score</TableCell>
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
                {`${n._id.substr(0, 10)} ...`}
              </Typography>
            </div>
            
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                {n.header}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                <Image
                  className={classes.img}
                  src={n.picture}
                  alt={n.picture}
                  circular
                />
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                {`${n.description.substr(0, 20)} ...`}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                {n.price}
              </Typography>
            </div>
            <div className={classes.column}>
              <Checkbox checked={n.showitemprice} value={n._id} />
            </div>
            <div className={classes.column} style={{width:"130px",'word-break':'break-all'}}>
            <Typography className={classes.secondaryHeading}>
             <a href={n.link}>{n.link}</a>

              </Typography>
              </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                {n.sortingscore}
              </Typography>
            </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Form onSubmit={this.onSubmit} style={{ width: "100%" }}>
              <p>Header: </p>
              <Form.Input
                className="textH1"
                type="text"
                id="header"
                name="header"
                value={datainput.header}
                onChange={this.onChange}
              />
              <br />

              <p>Picture: </p>

              <Form.Input
                className="textH1"
                type="text"
                id="picture"
                name="picture"
                value={datainput.picture}
                onChange={this.onChange}
              />
              <br />
              <p>Description: </p>

              <Form.Input
                className="textH1"
                type="text"
                id="description"
                name="description"
                value={datainput.description}
                onChange={this.onChange}
              />
              <br />
              <p>Price: </p>
              <Form.Input
                className="textH1"
                type="text"
                id="price"
                name="price"
                value={datainput.price}
                onChange={this.onChange}
              />
              <br />
              <p>Show Item Price: </p>
              <Checkbox
                className="textH1"
                type="checkbox"
                id="showitemprice"
                name="showitemprice"
                checked={datainput.showitemprice}
                value={datainput.showitemprice}
                onChange={this.onChange}
              />
               <br />
              <p>External Link: </p>
              <Form.Input
                className="textH1"
                type="text"
                id="link"
                name="link"
                value={datainput.link}
                onChange={this.onChange}
              />

               <br />
              <p>Sorting score: </p>
              <Form.Input
                className="textH1"
                type="text"
                id="sortingscore"
                name="sortingscore"
                value={datainput.sortingscore}
                onChange={this.onChange}
              />

              <Button size="small" type="button" onClick={this.submitDelete}>
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

export default withStyles(styles)(TableItem);

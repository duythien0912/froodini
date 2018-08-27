import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow
} from "material-ui/Table";
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from "material-ui/ExpansionPanel";
import Typography from "material-ui/Typography";
import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Paper from "material-ui/Paper";
import IconButton from "material-ui/IconButton";
import FirstPageIcon from "material-ui-icons/FirstPage";
import KeyboardArrowLeft from "material-ui-icons/KeyboardArrowLeft";
import KeyboardArrowRight from "material-ui-icons/KeyboardArrowRight";
import LastPageIcon from "material-ui-icons/LastPage";
import Button from "material-ui/Button";
import axios from "axios";

import InlineError from "../Messages/InlineError";

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class TablePaginationActions extends Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1)
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, {
  withTheme: true
})(TablePaginationActions);

let counter = 0;
function createData(name, calories, fat) {
  counter += 1;
  return { id: counter, name, calories, fat };
}

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
  }
});

class FormCategory extends Component {
  state = {
    data: [],
    page: 0,
    rowsPerPage: 5,
    datainput: {
      _id: "",
      name: "",
      image: "",
      description: "",
      type: ""
    },
    loading: false,
    errors: {}
  };

  componentDidMount = async () => {
    this.getData();
  };

  getData() {
    axios.get(`/api/food`).then(data => {
      this.setState({
        data: data.data
      });
    });
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
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

  onSubmit = async (e, _id) => {
    e.preventDefault();
    const errors = this.validate(this.state.datainput);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: true
      });
      await axios.put(`api/food/${_id}`, this.state.datainput);
      this.getData();
    }
  };
  submitDelete = async _id => {
    this.setState({
      loading: true
    });
    await axios.delete(`api/food/${_id}`);
    this.getData();
    this.setState({ loading: false });
  };

  validate = datainput => {
    const errors = {};
    if (!datainput.name) errors.name = "name can't not be black";
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
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => (
                  <TableRow key={n._id}>
                    <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <table>
                          <tbody>
                            <tr>
                              <TableCell className={classes.TableCell}>
                                {n.name}
                              </TableCell>
                              <TableCell className={classes.TableCell}>
                                {n.image}
                              </TableCell>
                              <TableCell className={classes.TableCell}>
                                {n.description.slice(0, 30)}
                              </TableCell>
                              <TableCell className={classes.TableCell}>
                                {n.type}
                              </TableCell>
                            </tr>
                          </tbody>
                        </table>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <form
                          onSubmit={e => this.onSubmit(e, n._id)}
                          style={{ width: "100%" }}
                        >
                          <p>Name: </p>
                          <input
                            className="textH1"
                            type="text"
                            id="name"
                            name="name"
                            value={datainput.name}
                            onChange={this.onChange}
                          />
                          {errors.name && <InlineError text={errors.name} />}

                          <br />

                          <p>Picture: </p>
                          <input
                            className="textH1"
                            type="text"
                            id="image"
                            name="image"
                            value={datainput.image}
                            onChange={this.onChange}
                          />
                          <br />

                          <p>Description: </p>

                          <input
                            className="textH1"
                            type="text"
                            id="description"
                            name="description"
                            value={datainput.description}
                            onChange={this.onChange}
                          />
                          <br />
                          <p>Type: </p>

                          <input
                            className="textH1"
                            type="text"
                            id="type"
                            name="type"
                            value={datainput.type}
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
                        </form>{" "}
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

export default withStyles(styles)(FormCategory);

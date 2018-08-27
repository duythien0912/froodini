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

import ExpandMoreIcon from "material-ui-icons/ExpandMore";
import Paper from "material-ui/Paper";
import Button from "material-ui/Button";
import axios from "axios";

import InlineError from "../Messages/InlineError";
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
  }
});

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

class TableCategory extends Component {
  state = {
    data: [],
    page: 0,
    documents: [],
    rowsPerPage: 5,
    datainput: {
      _id: "",
      namedish: "",
      urlimg:"",
      content:"",
      color:""
    },
    loading: false,
    errors: {}
  };

  add() {
    const documents = this.state.documents.concat(DocumentInput);
    this.setState({ documents });
  }
  constructor(props){
    super(props);

    this.add = this.add.bind(this);
  }
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

  onSubmit = async (e, _id) => {
    e.preventDefault();
    const errors = this.validate(this.state.datainput);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      alert(1234);
      this.setState({
        loading: true
      });
      await axios.put(`/api/category/${this.datainput._id}`, this.state.datainput);
      this.getData();
    }
  };
  getData() {
    axios.get('/api/category').then(data => {
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
                <TableCell>nameDish</TableCell>
                <TableCell>urlImg</TableCell>
                <TableCell>content</TableCell>
                <TableCell>Color</TableCell>
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
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <table>
                          <tbody>
                            <tr>
                              <TableCell className={classes.TableCell}>
                                {n.namedish}
                              </TableCell>
                              <TableCell className={classes.TableCell}>
                                {n.urlimg}
                              </TableCell>
                              <TableCell className={classes.TableCell}>
                                {n.content}
                              </TableCell>
                              <TableCell className={classes.TableCell}>
                                {n.color}
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
                          
  
                          { this.documents }

                          <p>nameDish: </p>
                          <input
                            className="textH1"
                            type="text"
                            id="namedish"
                            name="namedish"
                            value={datainput.namedish}
                            onChange={this.onChange}
                          />
                          
                          <br />
                          <p>urlImg: </p>
                          <input
                            className="textH1"
                            type="text"
                            id="urlimg"
                            name="urlimg"
                            value={datainput.urlimg}
                            onChange={this.onChange}
                          />
                          <br />
                          <p>content: </p>
                          <input
                            className="textH1"
                            type="text"
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
                            id="urlimage"
                            name="urlimage"
                            value={datainput.urlimage}
                            onChange={this.onChange}
                          />
                          <br />
                          <p>Color: </p>

                          <input
                            className="textH1"
                            type="text"
                            id="color"
                            name="color"
                            value={datainput.color}
                            onChange={this.onChange}
                          />
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

export default withStyles(styles)(TableCategory);

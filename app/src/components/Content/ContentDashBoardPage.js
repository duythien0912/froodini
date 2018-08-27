import React from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Tabs, { Tab } from "material-ui/Tabs";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Button from "material-ui/Button";
import AddIcon from "material-ui-icons/Add";
import axios from "axios";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from "material-ui/Dialog";

import FormAddNew from "../Forms/FormAddNew";
import FormAddNewCategory from "../Forms/FormAddNewCategory";
import FormAddNewFood from "../Forms/FormAddNewFood";
import FormAddNewEvent from "../Forms/FormAddNewEvent";
import FormDashBoard from "../Forms/FormDashBoard";
import TableFood from "../Tables/TableFood";
import TableEvent from "../Tables/TableEvent";

import TableUser from "../Tables/TableUser";
import FormAddUser from "../Forms/FormAddUser";
import 'semantic-ui-css/semantic.min.css';


const styles = theme => ({
  root: {
    overflowX: "auto"
  },

  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  column: {
    flexBasis: "33.33%"
  },
  flex: {
    display: "flex"
  }
});

class ContentDashBoardPage extends React.Component {
  state = {
    value: 0,
    data: [],
    add: false
  };

  componentWillMount = async () => {
    const body = await this.getItem();
    this.setState({
      data: body
    });
  };

  getItem = async () => {
    const res = await axios.get('/api/item');
    const body = res.data;
    return body;
  };
  getCategory = async () => {
    const res = await axios.get('/api/category');
    const body = res.data;
    return body;
  };
  getEvent = async () => {
    const res = await axios.get('/api/event');
    const body = res.data;
    return body;
  };
  getUser = async () => {
    const res = await axios.get('/api/user');
    const body = res.data;
    return body;
  };

  handleChange = async (event, value) => {
    this.setState({ value });
    switch (value) {
      case 0: {
        this.setState({
          data: []
        });
        const body = await this.getItem();
        this.setState({
          data: body
        });
        break;
      }
      case 1: {
        this.setState({
          data: []
        });
        const body = await this.getCategory();
        this.setState({
          data: body
        });
        break;
      }
      case 3: {
        this.setState({
          data: []
        });
        const body = await this.getEvent();
        this.setState({
          data: body
        });
        break;
      }
      case 4: {
        this.setState({
          data: []
        });
        const body = await this.getUser();
        this.setState({
          data: body
        });
        break;
      }
      default: {
        this.setState({
          data: []
        });
      }
    }
  };

  handleClickOpenAdd = () => {
    this.setState({ add: true });
  };

  handleCloseAdd = () => {
    this.setState({ add: false });
  };

  render() {
    const { classes } = this.props;
    const { value, data, add } = this.state;
    return (
      <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
        <Paper className={classes.root}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Participant" />
            <Tab label="Category" />
            <Tab label="Food" />
            <Tab label="Event" />
            <Tab label="User" />
          </Tabs>
        </Paper>
        {value === 0 ? (
          <div>{data.map(n => <FormDashBoard data={n} key={n._id} />)}</div>
        ) : (
          ""
        )}
        {value === 1 ? (
          <div>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Content</TableCell>
                    <TableCell>Image</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => (
                    <TableRow key={n._id}>
                      <TableCell>{n._id}</TableCell>
                      <TableCell>{n.namecategory}</TableCell>
                      <TableCell>{n.content}</TableCell>
                      <TableCell>{n.urlimg}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        ) : (
          ""
        )}
        {value === 2 ? (
          <div>
            <TableFood />
          </div>
        ) : (
          ""
        )}
        {value === 3 ? (
          <div>
            <TableEvent />
          </div>
        ) : (
          ""
        )}
        {value === 4 ? (
          <div>
            <TableUser />
          </div>
        ) : (
          ""
        )}
        <Button
          variant="fab"
          className={classes.fab}
          color="primary"
          onClick={this.handleClickOpenAdd}
        >
          <AddIcon />
        </Button>

        <Dialog
          open={add}
          onClose={this.handleCloseAdd}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add new</DialogTitle>
          <DialogContent>
            {value === 0 ? <FormAddNew submitData={this.handleClose} /> : ""}
            {value === 1 ? (
              <FormAddNewCategory submitData={this.handleClose} />
            ) : (
              ""
            )}
            {value === 2 ? (
              <FormAddNewFood submitData={this.handleClose} />
            ) : (
              ""
            )}
            {value === 3 ? (
              <FormAddNewEvent submitData={this.handleClose} />
            ) : (
              ""
            )}
            {value === 4 ? (
              <FormAddUser submitData={this.handleClose} />
            ) : (
              ""
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(ContentDashBoardPage);

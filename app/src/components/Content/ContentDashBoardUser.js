import React from "react";
import { withStyles } from "material-ui/styles";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Hidden from "material-ui/Hidden";
import Divider from "material-ui/Divider";
import MenuIcon from "material-ui-icons/Menu";
import List, { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import Store from "material-ui-icons/Store";
import Loyalty from "material-ui-icons/Loyalty";
import Style from "material-ui-icons/Style";
import Event from "material-ui-icons/Event";
import axios from "axios";

import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from "material-ui/Dialog";
import AddIcon from "material-ui-icons/Add";


import TableFood from "../Tables/TableFood";
import TableItem from "../Tables/TableItem";

import TableCategoryName from "../Tables/TableCategoryName";
import TableEvent from "../Tables/TableEvent";
import TableUser from "../Tables/TableUser";

import FormAddNew from "../Forms/FormAddNew";
import FormAddNameCategory from "../Forms/FormAddNameCategory";
import FormAddNewFood from "../Forms/FormAddNewFood";
import FormAddNewEvent from "../Forms/FormAddNewEvent";
import FormAddUser from "../Forms/FormAddUser";
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh",
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
    width: "100%"
  },
  appBar: {
    position: "absolute",
    marginLeft: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      position: "relative"
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    width: "100%"
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  }
});

class ContentDashBoardUser extends React.Component {
  state = {
    mobileOpen: false,
    value: "User",
    data: [],
    add: false
  };
  componentWillMount = async () => {
    const body = await this.getUser();
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

  menuClick = async value => {
    this.setState({
      value,
      mobileOpen: false
    });
    switch (value) {
      case "Item": {
        window.location.assign("/event");
        break;
      }
      case "Category": {
        window.location.assign("/admin/category");

        break;
      }
      case "Event": {
        window.location.assign("/admin/event");
        break;
      }
      case "Food": {
        window.location.assign("/admin/food");
        break;
      }
      case "User": {
        window.location.assign("/admin/user");
        break;
      }
      default: {
        this.setState({
          data: []
        });
      }
    }
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleClickOpenAdd = () => {
    this.setState({ add: true });
  };

  handleCloseAdd = () => {
    this.setState({ add: false });
  };

  handleClose = () => {
    this.setState({ add: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { value, data, add } = this.state;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <div>
            <ListItem button onClick={() => this.menuClick("Item")}>
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Useful" />
            </ListItem>
            <ListItem button onClick={() => this.menuClick("Category")}>
              <ListItemIcon>
                <Loyalty />
              </ListItemIcon>
              <ListItemText primary="Category" />
            </ListItem>
            <ListItem button onClick={() => this.menuClick("Food")}>
              <ListItemIcon>
                <Style />
              </ListItemIcon>
              <ListItemText primary="Food & Beverage" />
            </ListItem>
            <ListItem button onClick={() => this.menuClick("Event")}>
              <ListItemIcon>
                <Event />
              </ListItemIcon>
              <ListItemText primary="Event" />
            </ListItem>
            <ListItem button onClick={() => this.menuClick("User")}>
              <ListItemIcon>
                <Style />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItem>
          </div>
        </List>
        <Divider />
      </div>
    );

    return (
      
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {value}
            </Typography>
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {value === "Item" ? (
            <div>
            <TableItem />
            </div>
          ) : (
            ""
          )}
          {value === "Category" ? (
            <div>
              <TableCategoryName />
            </div>
          ) : (
            ""
          )}
          {value === "Food" ? (
            <div>
              <TableFood />
            </div>
          ) : (
            ""
          )}
          {value === "Event" ? (
            <div>
              <TableEvent />
            </div>
          ) : (
            ""
          )}
           {value === "User" ? (
            <div>
              <TableUser />
            </div>
          ) : (
            ""
          )}
        </main>
        
        <Modal
        trigger={<Button
          variant="fab"
          className={classes.fab}
          color="primary"
          onClick={this.handleClickOpenAdd}
          open={this.state.add}

          onClose={this.handleClose}
        >
          <AddIcon />
        </Button>}
        dimmer='inverted'
        size='tiny'
        closeIcon='close'
      >
        <Modal.Header>Add new {value}</Modal.Header>
        <Modal.Content>
       
            {value === "Item" ? (
              <FormAddNew submitData={this.handleClose} />
            ) : (
              ""
            )}
            {value === "Category" ? (
              <FormAddNameCategory submitData={this.handleClose} />
            ) : (
              ""
            )}
            {value === "Food" ? (
              <FormAddNewFood submitData={this.handleClose} />
            ) : (
              ""
            )}
            {value === "Event" ? (
              <FormAddNewEvent submitData={this.handleClose} />
            ) : (
              ""
            )}
             {value === "User" ? (
              <FormAddUser submitData={this.handleClose} />
            ) : (
              ""
            )}
         </Modal.Content>
      </Modal>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ContentDashBoardUser);

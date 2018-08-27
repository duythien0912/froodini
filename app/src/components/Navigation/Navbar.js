import React from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import { Link } from "react-router-dom";

const styles = theme => ({
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  buttonCreate: {
    border: "1px solid tomato",
    background: "tomato",
    color: "#fff",
    minHeight: "2em"
  },
  toolbar: {
    [theme.breakpoints.up("md")]: {
      minHeight: "1em"
    }
  },
  AppBar: {
    [theme.breakpoints.up("md")]: {
      boxShadow: "none",
      backgroundColor: "transparent",
      color: "black",
      padding: "1em"
    }
  },
  rootAppBar: {
    backgroundColor: "tomato !important"
  }
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div>
      <div className="navRootDesktop">
        <div className="NavBar_rootDesktop">
          <AppBar position="static" className={classes.AppBar}>
            <Toolbar className={classes.toolbar}>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Logo
              </Typography>

              <Button color="inherit">Log in</Button>
              <Button color="inherit">Sign up</Button>
              <Button className={classes.buttonCreate}>Create</Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
      <div className="navRootMobi">
        <div className="NavBar_root">
          <AppBar position="static" className={classes.rootAppBar}>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Title
              </Typography>
              <Button color="inherit">Login</Button>
              <Link to="/host" className="Link" href="host">
                <Button color="inherit">HostPage</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Navbar);

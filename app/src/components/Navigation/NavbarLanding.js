import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import { translate } from "react-i18next";

import coffee from "../../img/coffee.png";

const styles = theme => ({
  TextTypographyflex: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontSize: "14px"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    background: "#545454",
    color: "white",
    width: "30px",
    height: "30px"
  },
  rootDesktop: {
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  buttonCreate: {
    border: "1px solid tomato",
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
    backgroundColor: "#f7f7f7"
  },
  Toolbar: {
    color: "#545454",
    borderBottom: "1px solid #8A8A8A",
    height: "120px"
  },
  coffee: {
    position: "absolute",
    bottom: -7,
    right: 19,
    filter: "drop-shadow(2px 3px 2px rgba(0,0,0,0.25))"
  }
});

class NavbarLanding extends Component {
  goback = e => {
    e.preventDefault();
    this.props.goback();
  };

  render() {
    const { classes, t } = this.props;
    return (
      <div>
        <div className="navRootMobi">
          <div>
            <AppBar position="static" className={classes.rootAppBar}>
              <Toolbar className={classes.Toolbar}>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.goback}
                >
                  <Icon>chevron_left</Icon>
                </IconButton>
                <Typography
                  variant="title"
                  color="inherit"
                  className={classes.TextTypographyflex}
                >
                  {t("NavBar.title")}
                </Typography>
                <img
                  className={classes.coffee}
                  src={coffee}
                  height="79"
                  alt="coffee"
                />
              </Toolbar>
            </AppBar>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(translate("translations")(NavbarLanding));

import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import IconButton from "material-ui/IconButton";
import Icon from "material-ui/Icon";
import { translate } from "react-i18next";

import calendar from "../../img/calendar.png";
import home from "../../img/home.png";
import clock from "../../img/clock.png";
import styles from "../Style/FormEventUser";
import dateFormat from "dateformat";

class FormEventUser extends Component {
  onSubmit = e => {
    e.preventDefault();
    this.props.submit();
  };

  render() {
    const { classes, eventDataUser, t, i18n } = this.props;
    console.log(i18n.language)

    return (
      <div>
        <form>
          <div className={classes.formdivUser}>
            <img width="47px" src={calendar} alt="calendar" />
            {i18n.language == 'en' ?
              (<p>{eventDataUser.date ? dateFormat(eventDataUser.date, "mmmm d, yyyy") : ""}</p>)
              : (<p>{eventDataUser.date ? dateFormat(eventDataUser.date, "dd.mm.yyyy") : ""}</p>)
            }
          </div>
          <div className={classes.formdivUser}>
            <img width="47px" src={home} alt="home" />

            <p>{eventDataUser.place ? eventDataUser.place : ""}</p>
          </div>
          <div className={classes.formdivUser}>
            <img width="47px" src={clock} alt="clock" />

            <p>{eventDataUser.time ? dateFormat(eventDataUser.time, "h:MM TT") : ""}</p>
          </div>
          <div className={classes.formdiv}>
            <p className={classes.formP}>{t("EventPage.bottomForm")}</p>
          </div>
          <IconButton
            className={classes.formbutton}
            color="inherit"
            aria-label="Menu"
            onClick={this.onSubmit}
          >
            <div
              style={{
                fontSize: "12px",
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit"
              }}
            >
              {t("next")}
              <Icon className={classes.iconButton}>arrow_forward_ios</Icon>
            </div>
          </IconButton>
          <IconButton
            className={classes.formbutton}
            color="inherit"
            aria-label="Menu"
            style={{
              color: "#A69C9C",
              backgroundColor: "#EBEBEB",
              boxShadow: "none"
            }}
          >
            <div
              style={{
                fontSize: "12px",
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit"
              }}
            >
              <p style={{ fontSize: "12px", color: "#A69C9C" }}>
                {t("EventPage.jumpDirectly")}
              </p>
              <div className={classes.iconButton}>
                <Icon
                  style={{
                    fontSize: "16px",
                    position: "relative",
                    left: "10px",
                    display: "table-cell",
                    verticalAlign: "middle"
                  }}
                >
                  arrow_forward_ios
                </Icon>
                <Icon
                  style={{
                    fontSize: "16px",
                    display: "table-cell",
                    verticalAlign: "middle"
                  }}
                >
                  arrow_forward_ios
                </Icon>
              </div>
            </div>
          </IconButton>
        </form>
        <div style={{ textAlign: "center" }}>
          <hr className={classes.hr} />
          <p className={classes.p1}>{t("LandingPage.HowItWorks")}</p>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <p className={classes.p}>{t("EventPage.JustSelect")}</p>
            </li>
            <li className={classes.li}>
              <p className={classes.p}>{t("EventPage.HaveFun")}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(translate("translations")(FormEventUser));

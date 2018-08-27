import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { Link } from "react-router-dom";
import { translate } from "react-i18next";

import coffee from "../../img/coffee.png";
import styles from "../Style/ContentHostPage";

class ContentHostPage extends Component {
  render() {
    const { classes } = this.props;
    const { t } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.content1}>
          <Link href="landing" to="/landing">
            <h1 className={classes.text}>
              {t("HostPage.Host")}
              {/* t('Host', { numPersons: 500 }) */}
            </h1>
          </Link>
        </div>
        <div className={classes.content2}>
          <Link href="event" to="/event">
            <img
              className={classes.coffee}
              src={coffee}
              width="40"
              alt="coffee"
            />
            <h1 className={classes.text}> {t("HostPage.Participant")}</h1>
          </Link>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(translate("translations")(ContentHostPage));

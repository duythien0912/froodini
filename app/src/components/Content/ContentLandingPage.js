import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { translate } from "react-i18next";

import Froodini from "../../img/Froodini.png";
import camera from "../../img/camera.png";
import InputAvata from "../Input/InputAvata";
import NavTranLang from "../Navigation/NavTranLang";
import styles from "../Style/ContentLandingPage";

class ContentLandingPage extends Component {
  render() {
    const { classes } = this.props;
    const { t } = this.props;

    return (
      <div>
        <NavTranLang />

        <div className={classes.content1}>
          <img className={classes.FroodiniLogo} src={Froodini} alt="Froodini" />
          <p className={classes.textContent1}>{t("LandingPage.textHero")}</p>
        </div>
        <div className={classes.borderColor}>
          <InputAvata />

          <div className={classes.eclip}>
            <p className={classes.eclipP}>{t("LandingPage.textCamera")}</p>
            <div className={classes.hr} />
            <img className={classes.camera} src={camera} alt="camera" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(
  translate("translations")(ContentLandingPage)
);

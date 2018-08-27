import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { translate } from "react-i18next";

import FormOwnCreation from "../Forms/FormOwnCreation";
import check from "../../img/check.png";
import crane from "../../img/crane.jpeg";
import styles from "../Style/ContentSelectionPage";

class FormMoreAndCrane extends Component {
  render() {
    const { classes, fadeCrane, t } = this.props;
    return (
      <div
        className={classes.imgflex}
        style={fadeCrane ? { height: this.state.heightItem + 325 } : {}}
      >
        <div className={classes.imgDiv}>
          <div
            className={classes.FlexPlus}
            onClick={this.onClickCrane}
            role="presentation"
            style={{
              backgroundColor: "#f3f3f5"
            }}
            onLoad={this.onImgLoad}
          >
            <img src={crane} alt="crane" />
          </div>
          <p className={classes.pflex}>{t("ChoosePage.OwnCreation")}</p>
        </div>
        {fadeCrane ? (
          <div>
            <img
              src={check}
              alt="check"
              className={classes.img}
              style={{
                position: "relative",
                bottom: this.state.heightItem + 35,
                left: 0,
                boxShadow: "none",
                backgroundColor: "#0000004d",

                display: "block",
                margin: "auto"
              }}
            />
            <hr
              style={{
                position: "relative",
                bottom: this.state.heightItem * 4 / 3 + 25,
                left: 0,
                width: this.state.heightItem / 3
              }}
            />
            <FormOwnCreation />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
export default withStyles(styles)(translate("translations")(FormMoreAndCrane));

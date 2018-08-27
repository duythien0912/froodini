import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { Trans, translate } from "react-i18next";

import { connect } from "../store";
import Froodini from "../../img/Froodini.png";
//import avata from "../../img/logonew.png";
import FormEventUser from "../Forms/FormEventUser";
import styles from "../Style/ContentLandingPageUser";

class ContentLandingPageUser extends Component {
  state = {
    width: 0,
    height: 0
  };
  componentDidMount = () => {
    const id = this.props.idEvent;
    this.props.actions.getEvent(id);
  };

  onImgLoad = ({ target: img }) => {
    this.setState({
      height: img.offsetHeight,
      width: img.offsetWidth
    });
  };

  render() {
    const { classes, eventDataUser } = this.props;
    const { width, height } = this.state;
    const { t } = this.props;

    return (
      <div>
        <div className={classes.content1}>
          <img className={classes.FroodiniLogo} src={Froodini} alt="Froodini" />
          <p className={classes.textContent1}>
            <Trans i18nKey="EventPage.invitedMessage">
              {eventDataUser.name}
              {eventDataUser.category}
            </Trans>
            <br />
            {t("EventPage.txtContent")}
          </p>
        </div>
        <div className={classes.borderColor}>
          <div className={classes.eclip}>
            <img
              className={`
                ${
                width === height
                  ? "square"
                  : width > height
                    ? "imagelandscape"
                    : "imageportrait"
                } UserFroodiniLogo`}
              src={
                eventDataUser.thumbnailurl ? eventDataUser.thumbnailurl : eventDataUser.imageurl
              }
              alt="avata"
              onLoad={this.onImgLoad}
            />
          </div>
        </div>
        <div className={classes.content2}>
          <h1 className="textH1text">{eventDataUser.title}</h1>
          <p className={classes.description}>{eventDataUser.description}</p>
          <FormEventUser
            eventDataUser={eventDataUser}
            submit={this.props.submit}
          />
        </div>
      </div>
    );
  }
}

export default connect(state => ({ eventDataUser: state.eventDataUser }))(
  withStyles(styles)(translate("translations")(ContentLandingPageUser))
);

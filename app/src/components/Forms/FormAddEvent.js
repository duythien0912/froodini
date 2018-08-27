import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import Icon from "material-ui/Icon";
import { CircularProgress } from "material-ui/Progress";
import { translate } from "react-i18next";

import InlineError from "../Messages/InlineError";
import contact from "../../img/contact.png";
import calendar from "../../img/calendar.png";
import home from "../../img/home.png";
import clock from "../../img/clock.png";
import { connect } from "../store";
import NavCreateBy from "../Navigation/NavCreateBy";
import styles from "../Style/FormAddEvent";

import { Button, Form, Select } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const date = `${new Date().getFullYear()}/${
  new Date().getUTCMonth() < 10 ? "0" : ""
  }${new Date().getUTCMonth() + 1}/${
  new Date().getDate() < 10 ? "0" : ""
  }${new Date().getDate()}`;

const time = `${
  new Date().getHours() < 10 ? "0" : ""
  }${new Date().getHours()}:${
  new Date().getMinutes() < 10 ? "0" : ""
  }${new Date().getMinutes()}`;

class FormAddEvent extends Component {
  state = {
    data: {
      title: this.props.eventData.title ? this.props.eventData.title : "",
      description: this.props.eventData.description
        ? this.props.eventData.description
        : "",
      name: this.props.eventData.name ? this.props.eventData.name : "",
      date: this.props.eventData.date,
      place: this.props.eventData.place ? this.props.eventData.place : "",
      time: this.props.eventData.time
    },
    loading: false,
    color: "#EBEBEB",
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onChangeTextArea = e =>
    this.setState({
      color: "white"
    });
  onchangeDate = date => {
    this.setState({
      data: { ...this.state.data, "date": date }
    });
  };
  onchangeTime = time => {
    this.setState({
      data: { ...this.state.data, "time": time }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("data before submit")
    console.log(this.state.data)
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({
        loading: true
      });
      this.addEventDate();
      this.props.submit(this.state.data);
    }
  };
  async addEventDate() {
    await this.props.actions.addEventDate(this.state.data);
    this.setState({ loading: false });
  }

  validate = data => {
    const errors = {};
    const { t } = this.props;
    if (!data.name) errors.name = t("LandingPage.inputerror.name");
    if (!data.date) errors.date = t("LandingPage.inputerror.date");
    if (!data.place) errors.place = t("LandingPage.inputerror.place");
    if (!data.time) errors.time = t("LandingPage.inputerror.time");
    return errors;
  };

  render() {
    const { classes, t, i18n } = this.props;
    const { data, errors, loading, color } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className={classes.content2}>
            <input
              className={`textH1 ${classes.content2}`}
              placeholder={t("LandingPage.defaulTitle")}
              style={{ border: "none", width: "50vw" }}
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={this.onChange}
            />
            <p>
              <textarea
                className={`textPItalic ${classes.textPItalic} ${
                  classes.content2
                  }`}
                rows="6"
                maxLength="280"
                style={{
                  border: "none",
                  fontFamily: "inherit",
                  //backgroundColor: color,
                  paddingTop: "15px",
                  resize: "none",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.20)",
                  textAlign: "center",
                  fontSize: "12px",
                  lineHeight: "14px",
                  fontStyle: "Italic"
                }}
                placeholder={t("LandingPage.defaulDescrition")}
                id="description"
                name="description"
                value={data.description}
                onChange={this.onChange}
                onFocus={this.onChangeTextArea}
              />
            </p>
            {/* <div className={classes.divtextp2}>
              {" "}
              <p className={`textPItalic ${classes.textPItalic2}`}>
                {t("LandingPage.limitTextDescrition")}
              </p>
            </div> */}
          </div>

          <div className={classes.formdiv}>
            <img width="47px" src={contact} alt="contact" />

            <input
              className={classes.forminput}
              type="text"
              id="name"
              name="name"
              placeholder={t("LandingPage.defaulInputName")}
              value={data.name}
              onChange={this.onChange}
            />
            <div className={classes.errorLineInput}>
              {" "}
              {errors.name && <InlineError text={errors.name} />}
            </div>
          </div>
          <div className={classes.formdiv}>
            <img width="47px" src={calendar} alt="calendar" />

            <DatePicker
              readOnly
              selected={this.state.data.date}
              onChange={this.onchangeDate}
              placeholderText={t("LandingPage.defaultInputDate")}
              className={classes.forminput}
              name="date"
              id="date"
            />


            <div className={classes.errorLineInput}>
              {errors.date && <InlineError text={errors.date} />}
            </div>
          </div>
          <div className={classes.formdiv}>
            <img width="47px" src={home} alt="home" />

            <input
              className={classes.forminput}
              type="text"
              id="place"
              name="place"
              placeholder={t("LandingPage.defaulInputPlace")}
              value={data.place}
              onChange={this.onChange}
            />
            <div className={classes.errorLineInput}>
              {errors.place && <InlineError text={errors.place} />}
            </div>
          </div>
          <div className={classes.formdiv}>
            <img width="47px" src={clock} alt="clock" />

            <DatePicker
              readOnly
              selected={this.state.data.time}
              onChange={this.onchangeTime}
              showTimeSelect
              showTimeSelectOnly
              dateFormat="LT"
              //timeCaption="Time"
              timeIntervals={5}
              id="time"
              name="time"
              placeholderText={t("LandingPage.defaultInputTime")}
              className={classes.forminput}
            />
            <div className={classes.errorLineInput}>
              {errors.time && <InlineError text={errors.time} />}
            </div>
          </div>
          <div className={classes.formdiv}>
            <p className={classes.formP}>{t("LandingPage.description")}</p>
          </div>
          <button className={classes.formbutton}>
            {" "}
            <div
              style={{
                fontSize: "16px",
                width: "min-content",
                margin: "auto"
              }}
            >
              {t("next")}
              <Icon className={classes.iconButton}>arrow_forward_ios</Icon>
            </div>
          </button>

          <hr className={classes.hr} />
          <div style={{ textAlign: "center" }}>
            <p className={classes.p1}>{t("LandingPage.HowItWorks")}</p>
            <ul className={classes.ul}>
              <li className={classes.li}>
                <p className={classes.p}>{t("LandingPage.AddYour")}</p>
              </li>
              <li className={classes.li}>
                <p className={classes.p}>{t("LandingPage.SelectYour")}</p>
              </li>
              <li className={classes.li}>
                <p className={classes.p}>{t("LandingPage.share")}</p>
              </li>
            </ul>
            <hr className={classes.hr} />
            <div className={classes.info2}>
              <p className={classes.p2}>{t("LandingPage.FroodiniWill")}</p>
              <br />

              <p className={classes.p2}>{t("LandingPage.TheyJust")}</p>
              <br />
              <br />
              <p className={classes.p2}>{t("LandingPage.FroodiniPlan")}</p>
            </div>
          </div>
          <NavCreateBy />
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </form>
      </div>
    );
  }
}

export default connect(state => ({ eventData: state.eventData }))(
  withStyles(styles)(translate("translations")(FormAddEvent))
);
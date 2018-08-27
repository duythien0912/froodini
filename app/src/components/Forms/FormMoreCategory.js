import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { CircularProgress } from "material-ui/Progress";
import { translate } from "react-i18next";

import InlineError from "../Messages/InlineError";
import { connect } from "../store";
import styles from "../Style/FormMoreCategory";

class FormMoreCategory extends Component {
  state = {
    data: {
      name: "",
      message: "",
      email: ""
    },
    loading: false,
    success: false,
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = async e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      await this.props.actions.sendMailCategory(this.state.data);
      this.setState({ loading: false, success: true });
    }
  };

  validate = data => {
    const errors = {};
    const { t } = this.props;
    if (!data.name) errors.name = t("Feedback.inputerror.name");
    if (!data.message) errors.message = t("Feedback.inputerror.message");
    return errors;
  };

  render() {
    const { classes, t, lengthData } = this.props;

    const { data, errors, loading, success } = this.state;

    return (
      <div>
        <div
          className={lengthData % 2 === 1 ? classes.detail2 : classes.detail}
        >
          <p className={classes.p1}>{t("LandingPage.MoreForm.Feedback")}</p>
          <p className={classes.p2}>{t("LandingPage.MoreForm.text1")}</p>
          <p className={classes.p3}>{t("LandingPage.MoreForm.text2")}</p>
          <form className={classes.form} onSubmit={this.onSubmit}>
            
            <input
              className={classes.forminput}
              type="text"
              placeholder="Your name"
              id="name"
              name="name"
              value={data.name}
              onChange={this.onChange}
            />
            {errors.name && <InlineError text={errors.name} />}
            
            <textarea
              className={classes.formArea}
              type="text"
              placeholder="Your Message..."
              id="message"
              name="message"
              value={data.message}
              onChange={this.onChange}
            />
            {errors.message && <InlineError text={errors.message} />}

            <input
              className={classes.forminput}
              type="text"
              placeholder="Your Email (optional)"
              id="email"
              name="email"
              value={data.email}
              onChange={this.onChange}
            />
            {success ? (
              <p> {t("LandingPage.MoreForm.thank")}</p>
            ) : (
              <input
                className={classes.formsubmit}
                type="submit"
                placeholder="Send"
                value="Send"
                disabled={success}
                style={success ? { backgroundColor: "#727272" } : {}}
              />
            )}

            {loading && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default connect(state => ({ mailCategory: state.mailCategory }))(
  withStyles(styles)(translate("translations")(FormMoreCategory))
);

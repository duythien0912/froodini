import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { CircularProgress } from "material-ui/Progress";
import { translate } from "react-i18next";

import InlineError from "../Messages/InlineError";
import { connect } from "../store";
import styles from "../Style/FormMoreCategory";
import FormBringFood from "./FormBringFood";

class FormOwnCreation extends Component {
  state = {
    data: {
      name: "",
      message: "",
      email: ""
    },
    loading: false,
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
      // await this.props.actions.sendMailCategory(this.state.data);
      this.setState({ loading: false, success: true });
    }
  };

  validate = data => {
    const errors = {};
    const { t } = this.props;
    if (!data.name) errors.name = t("LandingPage.inputerror.name");
    if (!data.message) errors.message = t("LandingPage.inputerror.message");
    return errors;
  };

  render() {
    const { classes, t, lengthData } = this.props;

    const { data, errors, loading } = this.state;

    return (
      <div className={lengthData % 2 === 1 ? classes.detail : classes.detail2}>
        <input
          className={classes.forminput}
          type="text"
          placeholder="Name of dish"
          id="name"
          name="name"
          value={data.name}
          onChange={this.onChange}
        />
        {errors.name && <InlineError text={errors.name} />}

        <textarea
          className={classes.formArea}
          type="text"
          placeholder="Add a description (optional, more detailed information for your friends)"
          id="message"
          name="message"
          value={data.message}
          onChange={this.onChange}
        />
        {errors.message && <InlineError text={errors.message} />}

        <p className={classes.p1}>{t("FormOwn.ForHow")}</p>
        <FormBringFood />
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    );
  }
}

export default connect(state => ({ mailCategory: state.mailCategory }))(
  withStyles(styles)(translate("translations")(FormOwnCreation))
);

import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import { connect } from "../store";
import style from "../Style/ContentSelectionPage";

class NavSelectionColor extends Component {
  render() {
    const { classes, data, children } = this.props;
    return (
      <div>
        <div
          className={classes.borderColor}
          style={{ backgroundColor: data }}
        />
        {children}
      </div>
    );
  }
}

export default connect(state => ({ data: state.eventDataUser.Color }))(
  withStyles(style)(NavSelectionColor)
);

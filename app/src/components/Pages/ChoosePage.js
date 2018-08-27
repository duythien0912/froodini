import React, { Component } from "react";
import ContentChoosePage from "../Content/ContentChoosePage";
import NavbarLanding from "../Navigation/NavbarLanding";

class ChoosePage extends Component {
  render() {
    return (
      <div>
        <NavbarLanding goback={this.props.history.goBack} />
        <ContentChoosePage />
      </div>
    );
  }
}

export default ChoosePage;

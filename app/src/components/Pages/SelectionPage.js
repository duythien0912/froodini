import React, { Component } from "react";
import ContentSelectionPage from "../Content/ContentSelectionPage";
import NavbarLanding from "../Navigation/NavbarLanding";

class SelectionPage extends Component {
  render() {
    return (
      <div>
        <NavbarLanding goback={this.props.history.goBack} />
        <ContentSelectionPage />
      </div>
    );
  }
}

export default SelectionPage;

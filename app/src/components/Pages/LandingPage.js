import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";

import ContentLandingPage from "../Content/ContentLandingPage";
import FormAddEvent from "../Forms/FormAddEvent";
import ContentChoosePage from "../Content/ContentChoosePage";
import NavbarLanding from "../Navigation/NavbarLanding";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class LandingPage extends Component {
  state = {
    open: false
  };
  submit = () => {
    // this.props.history.push("/choose");
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <ContentLandingPage />
        <FormAddEvent submit={this.submit} />
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          transition={Transition}
        >
          <NavbarLanding goback={this.handleClose} />

          <ContentChoosePage />
        </Dialog>
      </div>
    );
  }
}

export default LandingPage;

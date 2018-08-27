import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";
import Snackbar from "material-ui/Snackbar";
import Fade from "material-ui/transitions/Fade";

import ContentEventPage from "../Content/ContentEventPage";
import NavCreateBy from "../Navigation/NavCreateBy";
import NavTranLang from "../Navigation/NavTranLang";
import NavbarLanding from "../Navigation/NavbarLanding";
import NavbarLanding2 from "../Navigation/NavbarLanding2";
import ContentSelectionPage from "../Content/ContentSelectionPage";
import ContentSelectionPage2 from "../Content/ContentSelectionPage2";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class EventUserPage extends Component {
  state = {
    open: false,
    open2: false,
    success: false
  };
  submit = () => {
    // this.props.history.push("/choose");
    this.setState({ open: true });
  };
  submit2 = () => {
    // this.props.history.push("/choose");
    this.setState({ open2: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleClose2 = () => {
    this.setState({ open2: false });
  };
  success = () => {
    this.setState({ success: true });
  };
  handleCloseBring = () => {
    this.setState({ success: false });
  };

  render() {
    return (
      <div>
        <NavTranLang />

        <ContentEventPage
          idEvent={this.props.match.params.id}
          submit={this.submit}
        />

        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          transition={Transition}
          className="DialogTogglo"
        >
          <NavbarLanding goback={this.handleClose} />

          <ContentSelectionPage success={this.success} submit2={this.submit2} />
        </Dialog>

        <Dialog
          fullScreen
          open={this.state.open2}
          onClose={this.handleClose2}
          transition={Transition}
          className="DialogTogglo"
        >
          <NavbarLanding2 goback={this.handleClose2} />

          <ContentSelectionPage2
            success={this.success}
            submit2={this.submit2}
          />
        </Dialog>

        <NavCreateBy />
        <Snackbar
          open={this.state.success}
          onClose={this.handleCloseBring}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          transition={Fade}
          SnackbarContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id="message-id">Bring Success</span>}
        />
      </div>
    );
  }
}

export default EventUserPage;

import React, { Component } from "react";
import { CircularProgress } from "material-ui/Progress";
import { translate } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import ContentCopy from "material-ui-icons/ContentCopy";
import OpenInNew from "material-ui-icons/OpenInNew";
import Slide from "material-ui/transitions/Slide";
import {
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

import { connect } from "../store";
import share from "../../img/share.png";
import messenger from "../../img/facebook-messenger.svg";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class InputAndShareAction extends Component {
  state = {
    loading: false,
    open: false,
    copySuccess: false
  };

  onSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });
    await this.props.actions.addEventAndShare(this.props.datas);
    await this.setState({
      loading: false,
      open: true
    });
  };

  onChange = e => {
    e.preventDefault();
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  copyToClipboard = e => {
    this.textArea.select();
    document.execCommand("copy");
    this.setState({ copySuccess: true });
  };

  shareFB = e => {
    e.preventDefault();
    const { eventData } = this.props;

    window.FB.ui({
      method: "send",
      link: `${eventData.linkEvent}${eventData._id}`
    });
  };
  render() {
    const { eventData, t } = this.props;
    const { loading, copySuccess } = this.state;
    const link = `${eventData.linkevent}${eventData._id}`;
    return (
      <div
        style={{
          position: "relative",
          marginTop: "30px"
        }}
      >
        <input
          type="submit"
          className="input"
          value={t("ChoosePage.createAndShare")}
          onClick={this.onSubmit}
          style={{
            width: "80vw",
            height: "60px",
            backgroundColor: "#ACC95B",
            border: "none",
            color: "#FFFFFF",
            cursor: "pointer",
            borderRadius: "0",
            fontWeight: "700"
          }}
        />
        <img
          src={share}
          alt="share"
          width={30}
          height={30}
          style={{
            position: "absolute",
            top: "15px",
            right: "15px"
          }}
        />

        <Dialog
          open={this.state.open}
          transition={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Share to your friend"}
          </DialogTitle>
          <DialogContent>
            <input
              style={{
                border: "none",
                borderBottom: "1px solid black",
                width: "-webkit-fill-available"
              }}
              value={link}
              onChange={this.onChange}
              ref={textArea => {
                this.textArea = textArea;
              }}
            />

            <DialogContentText id="alert-dialog-slide-description">
              {eventData.description}
              <br /> {copySuccess ? "Copy Success" : ""}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <WhatsappShareButton
              url={link}
              title="Froodini"
              separator=":: "
              className="Demo__some-network__share-button"
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <EmailShareButton
              url={link}
              subject={`${eventData.name} to ${eventData.category}`}
              body={eventData.description}
              className="Demo__some-network__share-button"
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <button
              onClick={this.shareFB}
              style={{
                backgroundColor: "transparent",
                border: "none"
              }}
            >
              <img src={messenger} alt="messager" width={31} />
            </button>
          </DialogActions>

          <DialogActions>
            <Button onClick={this.copyToClipboard}>
              <ContentCopy />
              Copy
            </Button>
            <Link
              to={`${eventData._id ? `event/${eventData._id}` : "#0"}`}
              href="eventDataUser"
            >
              <Button>
                <OpenInNew />
                Open
              </Button>
            </Link>
          </DialogActions>
        </Dialog>

        {loading && <CircularProgress size={24} className="loading" />}
      </div>
    );
  }
}

export default connect(state => ({ eventData: state.eventData }))(
  translate("translations")(InputAndShareAction)
);

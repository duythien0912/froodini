import React, { Component } from "react";
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button';
import styles from "../Style/ContentSelectionPage";
import contact from "../../img/contact.png";

class FormSelection extends Component {
  render() {
    const { classes, lengthFood, name } = this.props;
    return (
      <ExpansionPanel style={{marginTop:"0px"}}>
        <ExpansionPanelSummary
          style={{ minHeight: "61px", backgroundColor: "#f7f7f7" }}
          expandIcon={<ExpandMoreIcon />}
        >
          <div className="test">
            <img className={classes.contactImg} src={contact} alt="contact" />
            <span
              style={{
                top: "15px",
                left: "18vw",
                width: "10vw",
                position: "absolute",
                transform: "translate(-50%, -50%)",
                maxWidth: "60px",
                marginRight: "-50%"
              }}
            >
              {lengthFood}
            </span>
            <p className={classes.textForm}>{name}</p>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ backgroundColor: "#f7f7f7" }}>
          {this.props.children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}
export default withStyles(styles)(FormSelection);

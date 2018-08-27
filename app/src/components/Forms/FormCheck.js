import React, { Component } from "react";
import withStyles from "material-ui/styles/withStyles";

import styles from "../Style/ContentSelectionPage";
import check from "../../img/check.png";
import FormBringFood from "./FormBringFood";

class FormCheck extends Component {
  render() {
    const { classes, e, x, heightItem } = this.props;
    return (
      <div
        style={{ width: "80vw", position: "absolute", top: "10px" }}
        ref={foodElement => {
          this.foodElement = foodElement;
        }}
      >
        <p>Wird bereits mitgebracht von: Sebastian, Oliver</p>
        <br />
        <p>{x.description}</p>
        <br />

        <p>
          Passende Rezepte findest du auf einer deiner lieblings Kochportale.
        </p>
        <br />

        <p>For how many people you bring Brötchen?</p>
        <br />

        <FormBringFood data={x} />
      </div>
    );
  }
}

export default withStyles(styles)(FormCheck);

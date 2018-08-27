import React, { Component } from "react";
import { translate } from "react-i18next";

import InputAndShareAction from "../Input/InputAndShareAction";

class FormCreateAndShare extends Component {
  render() {
    const { datas } = this.props;
    return (
      <div>
        <p>{datas.content}</p>
        <InputAndShareAction datas={datas} />
      </div>
    );
  }
}

export default translate("translations")(FormCreateAndShare);

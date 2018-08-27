import React, { Component } from "react";
import { translate } from "react-i18next";
import axios from "axios";

class NavTranLang extends Component {
  state = {
    languages: []
  };
  componentDidMount = async () => {
    await axios
      .get(`/api/languages`)
      .then(response => {
        this.setState({
          languages: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { i18n } = this.props;

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    const { languages } = this.state;
    const { language } = this.props.i18n;

    return (
      <div className="containerTranButton">
        {languages.map((data, i) => (
          <div key={`${data}${i}`}>
            <button
              className={`TranButton ${language === data ? "chooseDE" : ""} `}
              onClick={() => changeLanguage(data)}
            >
              {data}
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default translate("translations")(NavTranLang);

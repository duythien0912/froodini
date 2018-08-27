import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { translate } from "react-i18next";

import contact from "../../img/contact.png";
import check from "../../img/check.png";

import FormBringFood2 from "../Forms/FormBringFood2";
import NavSelectionColor from "../Navigation/NavSelectionColor";
import styles from "../Style/ContentSelectionPage";
import { connect } from "../store";

class ContentSelectionPage extends Component {
  state = {
    fade: {},
    chooseForm: {
      form1: true,
      form2: false,
      form3: false
    },
    image: {
      width: 0,
      height: 0
    },
    data: [],
    fadeMore: false,
    fadeCrane: false,
    foodElement: 0,
    heightItem: 0,
    lengthForm1: 0
  };

  componentWillMount = () => {
    this.updateDimensions();
  };

  componentDidMount = async () => {
    const formElement = this.formElement.clientHeight;
    const body = await this.props.eventDataUser.optionData;
    const lengthForm1 = obj => {
      let size = 0;
      if (obj)
        obj.map(data => {
          size += data.data.participants.length
            ? data.data.participants.length
            : 0;
          return true;
        });
      return size;
    };
    this.setState({ formElement, data: body, lengthForm1: lengthForm1(body) });

    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  onClickForm = async form => {
    const freForm = this.state.chooseForm[form];
    if (freForm !== true) {
      await this.setState({
        chooseForm: false
      });
      await this.setState({
        chooseForm: {
          [form]: !freForm
        }
      });
    }
  };
  onClickImg = async fade => {
    const preFade = this.state.fade[fade];
    await this.setState({
      fade: {
        [fade]: !preFade,
        ...this.state.fade
      },
      fadeMore: false,
      fadeCrane: false
    });
    if (preFade !== true) {
      this.updateDimensions();
    } else {
      this.setState({ foodElement: 0 });
    }
  };
  onClickMore = async () => {
    await this.setState({
      fadeMore: !this.state.fadeMore,
      fadeCrane: false,
      fade: false
    });

    const heightItem = this.imgItemElement
      ? this.imgItemElement.clientHeight
      : 0;
    this.setState({ heightItem });
  };
  onClickCrane = async () => {
    await this.setState({
      fadeCrane: !this.state.fadeCrane,
      fadeMore: false,
      fade: false
    });

    const heightItem = this.imgItemElement
      ? this.imgItemElement.clientHeight
      : 0;
    this.setState({ heightItem });
  };

  onImgLoad = ({ target: img }) => {
    this.setState({
      image: {
        height: img.offsetHeight,
        width: img.offsetWidth
      }
    });
  };

  handleClickBring = () => {
    if (this.state.chooseForm.form1) {
      this.props.submit2();
      this.props.success();
    }
  };

  updateDimensions = () => {
    const foodElement = this.foodElement ? this.foodElement.clientHeight : 0;
    const heightItem = this.imgItemElement
      ? this.imgItemElement.clientHeight
      : 0;
    this.setState({ foodElement, heightItem });
  };

  render() {
    const { classes, t } = this.props;
    const { data, chooseForm, lengthForm1 } = this.state;
    const { width, height } = this.state.image;
    return (
      <div>
        <div className={classes.content1}>
          <div>
            <NavSelectionColor />
          </div>
          <div
            className={classes.Formchoose}
            disabled={chooseForm.form1}
            onClick={() => this.onClickForm("form1")}
            role="presentation"
            style={
              chooseForm.form1
                ? {
                    cursor: "auto",
                    height: "auto"
                  }
                : {}
            }
            ref={formElement => {
              this.formElement = formElement;
            }}
          >
            {chooseForm.form1 ? (
              <div className={classes.flex}>
                {data
                  ? data.map(
                      (x, e) =>
                        e % 2 === 0 ? (
                          <div
                            key={`fade${e}`}
                            className={classes.imgflex}
                            style={{
                              height:
                                this.state.heightItem +
                                this.state.heightItem / 3 +
                                25
                            }}
                          >
                            <div
                              className={classes.imgDiv}
                              value={e}
                              onClick={() => this.onClickImg(e)}
                              role="presentation"
                            >
                              <div
                                className={classes.img}
                                ref={imgItemElement => {
                                  this.imgItemElement = imgItemElement;
                                }}
                              >
                                <img
                                  src={x.data.image}
                                  alt={x.data.image}
                                  className={`
                ${
                  width === height
                    ? "square"
                    : width > height
                      ? "imagelandscape"
                      : "imageportrait"
                }`}
                                  onLoad={this.onImgLoad}
                                  style={{ marginLeft: "-25%" }}
                                />
                              </div>

                              <p className={classes.pflex}>{x.data.name}</p>
                            </div>

                            <img
                              src={check}
                              alt="check"
                              className={classes.img}
                              style={{
                                position: "relative",
                                bottom: this.state.heightItem + 35,
                                left: 0,
                                boxShadow: "none",
                                backgroundColor: "#0000004d",
                                height: "33vw",
                                width: "33vw",
                                borderRadius: "50%",
                                cursor: "pointer",
                                display: "block",
                                margin: "auto"
                              }}
                            />
                            <hr
                              style={{
                                position: "relative",
                                bottom: (this.state.heightItem * 4) / 3 + 25,
                                left: 0,
                                width: this.state.heightItem / 3
                              }}
                            />

                            <div
                              className={classes.bringForm}
                              style={{
                                width: "50vw",
                                textAlign: "center",
                                left: 0,
                                transform: "unset",
                                top:
                                  this.state.heightItem +
                                  this.state.heightItem / 3 +
                                  25,
                                bottom: "unset"
                              }}
                              ref={foodElement => {
                                this.foodElement = foodElement;
                              }}
                            >
                              <FormBringFood2>{x.optionData}</FormBringFood2>
                            </div>
                          </div>
                        ) : (
                          <div
                            key={`fade${e}`}
                            className={classes.imgflex}
                            style={{
                              height:
                                this.state.heightItem +
                                this.state.heightItem / 3 +
                                25
                            }}
                          >
                            <div
                              className={classes.imgDiv}
                              value={e}
                              onClick={() => this.onClickImg(e)}
                              role="presentation"
                            >
                              <div
                                className={classes.img}
                                ref={imgItemElement => {
                                  this.imgItemElement = imgItemElement;
                                }}
                              >
                                <img
                                  src={x.data.image}
                                  alt={x.data.image}
                                  className={`
                ${
                  width === height
                    ? "square"
                    : width > height
                      ? "imagelandscape"
                      : "imageportrait"
                }`}
                                  onLoad={this.onImgLoad}
                                  style={{ marginLeft: "-25%" }}
                                />
                              </div>

                              <p className={classes.pflex}>{x.data.name}</p>
                            </div>
                            <img
                              src={check}
                              alt="check"
                              className={classes.img}
                              style={{
                                position: "relative",
                                bottom: this.state.heightItem + 35,
                                left: 0,
                                boxShadow: "none",
                                backgroundColor: "#0000004d",
                                height: "33vw",
                                width: "33vw",
                                borderRadius: "50%",
                                cursor: "pointer",
                                display: "block",
                                margin: "auto"
                              }}
                            />
                            <hr
                              style={{
                                position: "relative",
                                bottom: (this.state.heightItem * 4) / 3 + 25,
                                left: 0,
                                width: this.state.heightItem / 3
                              }}
                            />
                            <div
                              className={classes.bringFormOdd}
                              ref={foodElement => {
                                this.foodElement = foodElement;
                              }}
                              style={{
                                width: "50vw",
                                textAlign: "center",
                                left: 0,
                                transform: "unset",
                                top:
                                  this.state.heightItem +
                                  this.state.heightItem / 3 +
                                  25,
                                bottom: "unset"
                              }}
                            >
                              <FormBringFood2>{x.optionData}</FormBringFood2>
                            </div>
                          </div>
                        )
                    )
                  : ""}
              </div>
            ) : (
              ""
            )}

            <div
              style={{
                height: "14vw",
                position: "relative",
                marginTop: "24vw",
                marginBottom: "8px"
              }}
            >
              <p
                style={{
                  position: "absolute",
                  top: "50%",
                  left: " 50%",
                  marginRight: "-50%",
                  transform: " translate(-50%, -50%)"
                }}
              >
                {t("EventFinishPage.peopleBring")}
              </p>
            </div>
          </div>
          <div
            className={classes.Formchoose}
            role="presentation"
            style={chooseForm.form2 ? { height: "auto" } : {}}
          >
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
              {lengthForm1}
            </span>
            <p className={classes.textForm}>Food</p>
            <i className={classes.arrowDown} />
            <div
              ref={imgElement => {
                this.imgElement = imgElement;
              }}
            />
          </div>
          <div
            className={classes.Formchoose}
            role="presentation"
            style={chooseForm.form3 ? { height: "auto" } : {}}
          >
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
              {lengthForm1}
            </span>
            <p className={classes.textForm}>Beverages</p>
            <i className={classes.arrowDown} />
            <div
              ref={imgElement => {
                this.imgElement = imgElement;
              }}
            />
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(
  translate("translations")(
    connect(state => ({ eventDataUser: state.eventDataUser }))(
      ContentSelectionPage
    )
  )
);

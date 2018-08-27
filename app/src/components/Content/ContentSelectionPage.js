import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { translate } from "react-i18next";
import axios from "axios";

import crane from "../../img/crane.jpeg";
import cakeseletion from "../../img/cakeseletion.jpeg";
import contact from "../../img/contact.png";
import check from "../../img/check.png";

import FormBringFood from "../Forms/FormBringFood";
import FormOwnCreation from "../Forms/FormOwnCreation";
import FormMoreCategory from "../Forms/FormMoreCategory";
import FormUseFul from "../Forms/FormUseFul";
import NavSelectionColor from "../Navigation/NavSelectionColor";
import BringInput from "../Input/BringInput";
import styles from "../Style/ContentSelectionPage";
import FormSelection from "../Forms/FormSelection";
import { connect } from "../store";
import MediaQuery from 'react-responsive';

class ContentSelectionPage extends Component {
  state = {
    fade: {},
    image: {
      width: 0,
      height: 0
    },
    data: [],
    fadeMore: false,
    fadeCrane: false,
    foodElement: 0,
    heightItem: 0,
    lengthFood: 0,
    lengthBeverages: 0
  };

  componentWillMount = () => {
    this.updateDimensions();
  };

  componentDidMount = async () => {
    const formElement = this.formElement ? this.formElement.clientHeight : 0;
    const res = await axios.get('/api/food');
    const body = res.data;
    const lengthFood = obj => {
      let size = 0;
      obj.map(data => {
        if (data.type === "food") size += 1;
        return true;
      });
      return size;
    };
    const lengthBeverages = obj => {
      let size = 0;
      obj.map(data => {
        if (data.type === "beverages") size += 1;
        return true;
      });
      return size;
    };
    this.setState({
      formElement,
      data: body,
      lengthFood: lengthFood(body),
      lengthBeverages: lengthBeverages(body)
    });

    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  onClickImg = async fade => {
    const preFade = this.state.fade[fade];
    if (!preFade) {
      await this.setState({
        fade: {
          [fade]: !preFade,
          ...this.state.fade
        }
      });
    }

    if (preFade === false) {
      await this.setState({
        fade: {
          ...this.state.fade,
          [fade]: true
        }
      });
    }
    if (preFade !== "undefined") {
      this.updateDimensions();
    }
  };

  onClickMore = async () => {
    await this.setState({
      fadeMore: !this.state.fadeMore
    });

    const heightItem = this.imgItemElement
      ? this.imgItemElement.clientHeight
      : 0;
    this.setState({ heightItem });
  };

  onClickCrane = async () => {
    await this.setState({
      fadeCrane: !this.state.fadeCrane
    });

    const heightItem = this.imgItemElement
      ? this.imgItemElement.clientHeight
      : 0;
    this.setState({ heightItem });
  };

  onImgLoad = ({ target: div }) => {
    this.setState({
      image: {
        height: div.offsetHeight,
        width: div.offsetWidth
      }
    });
  };
  clickCheck = async fade => {
    await this.setState({
      fade: {
        ...this.state.fade,
        [fade]: false
      }
    });
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
    const {
      fade,
      data,
      fadeMore,
      fadeCrane,
      lengthFood,
      lengthBeverages
    } = this.state;
    const { width, height } = this.state.image;
    return (
      <div>
        <div className={classes.content1}>
          <div>
            <img
              src={cakeseletion}
              alt="cakeseletion"
              className={classes.imgHero}
            />
            <NavSelectionColor />
          </div>

          <FormSelection lengthFood={lengthFood || ""} name="Food">
            <div className={classes.flex}>
              {data.map(
                (x, e) =>
                  x.type === "food" ? (
                    e % 2 === 0 ? (
                      <div
                        key={`fade${e}`}
                        className={classes.imgflex}
                        style={
                          fade[e]
                            ? {
                                height:
                                  this.state.foodElement +
                                  this.state.heightItem +
                                  this.state.foodElement / 2
                              }
                            : {
                                height: this.state.heightItem
                              }
                        }
                      >
                        <div className={classes.imgDiv} value={e}>
                          <div
                            className={classes.img}
                            ref={imgItemElement => {
                              this.imgItemElement = imgItemElement;
                            }}
                          >
                            <img
                              src={x.image}
                              alt={x.image}
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
                              onClick={() => this.onClickImg(e)}
                              role="presentation"
                            />
                          </div>
                          <div style={{ position: "absolute",top: "-2vw",left: "36vw"}}>
                          <img
                            src={contact}
                            alt="contact"
                            style={{
                              width: "7.5vw",
                              height: "auto",

                            }}
                          />
                          <MediaQuery query="(min-device-width: 600px)">
                          <span
                            style={{
                              width: "7.5vw",
                              height: "auto",
                              position: "absolute",
                              top: "1vw",
                              left: "0.3vw",
                              textAlign: "end",
                              fontSize: "10px"
                            }}
                          >
                            {x.participants.length}
                          </span>
                          </MediaQuery>
                          <MediaQuery query="(max-width: 600px)">
                          <span
                            style={{
                              width: "7.5vw",
                              height: "auto",
                              position: "absolute",
                              top: "-1vw",
                              left: "0.6vw",
                              textAlign: "end",
                              fontSize: "10px"
                            }}
                          >
                            {x.participants.length}
                          </span>
                          </MediaQuery>
                          </div>
                          <p className={classes.pflex}>{x.name}</p>
                        </div>

                        <div className="quee">
                          {fade[e] === true ? (
                            <div>
                              <div>
                                <img
                                  src={check}
                                  alt="check"
                                  className={classes.img}
                                  style={{
                                    position: "relative",
                                    bottom: this.state.heightItem + 39,
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
                                  onClick={() => this.clickCheck(e)}
                                  role="presentation"
                                />
                                <hr
                                  style={{
                                    position: "relative",
                                    bottom:
                                      (this.state.heightItem * 4) / 3 + 25,
                                    left: 0,
                                    width: this.state.heightItem / 3
                                  }}
                                />
                              </div>
                              <MediaQuery query="(max-device-width: 600px)">
                              <div
                                className={classes.bringFormMobileLeft}
                                ref={foodElement => {
                                  this.foodElement = foodElement;
                                }}
                              >
                                <br />
                                <p>
                                  {t("EventSelectPage.item.offer")}: Sebastian,
                                  Oliver
                                </p>
                                <br />
                                <p>{x.description}</p>
                                <br />
                                <p>
                                  {t("EventSelectPage.item.bring")} {x.name}?
                                </p>
                                <br />
                                <FormBringFood data={x} />
                              </div>
                              </MediaQuery>
                              <MediaQuery query="(min-device-width: 600px)">
                              <div
                                className={classes.bringForm}
                                ref={foodElement => {
                                  this.foodElement = foodElement;
                                }}
                              >
                                <br />
                                <p>
                                  {t("EventSelectPage.item.offer")}: Sebastian,
                                  Oliver
                                </p>
                                <br />
                                <p>{x.description}</p>
                                <br />
                                <p>
                                  {t("EventSelectPage.item.bring")} {x.name}?
                                </p>
                                <br />
                                <FormBringFood data={x} />
                              </div>
                              </MediaQuery>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ) : (
                      <div
                        key={`fade${e}`}
                        className={classes.imgflex}
                        style={
                          fade[e]
                            ? {
                                height:
                                  this.state.foodElement +
                                  this.state.heightItem +
                                  this.state.foodElement / 2
                              }
                            : {
                                height: this.state.heightItem
                              }
                        }
                      >
                        <div className={classes.imgDiv} value={e}>
                          <div
                            className={classes.img}
                            ref={imgItemElement => {
                              this.imgItemElement = imgItemElement;
                            }}
                          >
                            <img
                              src={x.image}
                              alt={x.image}
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
                              onClick={() => this.onClickImg(e)}
                              role="presentation"
                            />
                          </div>
                          <div style={{ position: "absolute",
                              top: "-2vw",
                              left: "36vw"}}>
                        <img
                            src={contact}
                            alt="contact"
                            style={{
                              width: "7.5vw",
                              height: "auto",

                            }}
                          />
                         <MediaQuery query="(min-device-width: 600px)">
                          <span
                            style={{
                              width: "7.5vw",
                              height: "auto",
                              position: "absolute",
                              top: "1vw",
                              left: "0.3vw",
                              textAlign: "end",
                              fontSize: "10px"
                            }}
                          >
                            {x.participants.length}
                          </span>
                          </MediaQuery>
                          <MediaQuery query="(max-width: 600px)">
                          <span
                            style={{
                              width: "7.5vw",
                              height: "auto",
                              position: "absolute",
                              top: "-1vw",
                              left: "0.8vw",
                              textAlign: "end",
                              fontSize: "10px"
                            }}
                          >
                            {x.participants.length}
                          </span>
                          </MediaQuery>
                          </div>
                          <p className={classes.pflex}>{x.name}</p>
                        </div>
                        <div className="quee">
                          {fade[e] ? (
                            <div>
                              <div>
                                <img
                                  src={check}
                                  alt="check"
                                  className={classes.img}
                                  style={{
                                    position: "relative",
                                    bottom: this.state.heightItem + 39,
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
                                  onClick={() => this.clickCheck(e)}
                                  role="presentation"
                                />
                                <hr
                                  style={{
                                    position: "relative",
                                    bottom:
                                      (this.state.heightItem * 4) / 3 + 25,
                                    left: 0,
                                    width: this.state.heightItem / 3
                                  }}
                                />
                              </div>
                              <MediaQuery query="(max-device-width: 600px)">
                              <div

                                className={classes.bringFormMobile}
                                ref={foodElement => {
                                  this.foodElement = foodElement;
                                }}
                              >
                                <br />
                                <p>
                                  {t("EventSelectPage.item.offer")}: Sebastian,
                                  Oliver
                                </p>
                                <br />
                                <p>{x.description}</p>
                                <br />
                                <p>
                                  {t("EventSelectPage.item.bring")} {x.name}?
                                </p>
                                <br />

                                <FormBringFood data={x} />
                              </div>
                              </MediaQuery>
                              <MediaQuery query="(min-device-width: 600px)">
                              <div
                                className={classes.bringFormRight}
                                ref={foodElement => {
                                  this.foodElement = foodElement;
                                }}
                              >
                                <br />
                                <p>
                                  {t("EventSelectPage.item.offer")}: Sebastian,
                                  Oliver
                                </p>
                                <br />
                                <p>{x.description}</p>
                                <br />
                                <p>
                                  {t("EventSelectPage.item.bring")} {x.name}?
                                </p>
                                <br />

                                <FormBringFood data={x} />
                              </div>
                              </MediaQuery>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    )
                  ) : (
                    ""
                  )
              )}
              <div
                className={classes.imgflex}
                style={
                  fadeCrane
                    ? { height: this.state.heightItem + 325 }
                    : {
                        height: this.state.heightItem
                      }
                }
              >
                <div className={classes.imgDiv}>
                  <div
                    className={classes.FlexPlus}
                    style={{
                      backgroundColor: "#f3f3f5"
                    }}
                    onLoad={this.onImgLoad}
                    onClick={this.onClickCrane}
                    role="presentation"
                  >
                    <img src={crane} alt="crane" />
                  </div>
                  <p className={classes.pflex}>{t("ChoosePage.OwnCreation")}</p>
                </div>
                {fadeCrane ? (
                  <div style={{ height: this.state.heightItem }}>
                    <img
                      src={check}
                      alt="check"
                      className={classes.imgCrane}
                      style={{
                        position: "relative",
                        bottom: this.state.heightItem + 39,
                        left: 0,
                        boxShadow: "none",
                        backgroundColor: "#0000004d",

                        display: "block",
                        margin: "auto"
                      }}
                      onClick={this.onClickCrane}
                      role="presentation"
                    />
                    <hr
                      style={{
                        position: "relative",
                        bottom: (this.state.heightItem * 4) / 3 + 25,
                        left: 0,
                        width: this.state.heightItem / 3
                      }}
                    />
                    <FormOwnCreation lengthData={lengthFood} />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                className={classes.imgflex}
                style={
                  fadeMore
                    ? { height: this.state.heightItem + 520 }
                    : {
                        height: this.state.heightItem
                      }
                }
              >
                <div className={classes.imgDiv}>
                  <div
                    className={classes.FlexPlus}
                    onClick={this.onClickMore}
                    role="presentation"
                  >
                    <p className={classes.pPlus}>+</p>
                  </div>
                  <p className={classes.pflex}>{t("ChoosePage.more")}</p>
                </div>
                {fadeMore ? (
                  <div>
                    <img
                      src={check}
                      alt="check"
                      className={classes.imgMore}
                      style={{
                        position: "relative",
                        bottom: this.state.heightItem + 39,
                        left: 0,
                        boxShadow: "none",
                        backgroundColor: "#0000004d",
                        display: "block",
                        margin: "auto"
                      }}
                      onClick={this.onClickMore}
                      role="presentation"
                    />
                    <hr
                      style={{
                        position: "relative",
                        bottom: (this.state.heightItem * 4) / 3 + 25,
                        left: 0,
                        width: this.state.heightItem / 3
                      }}
                    />
                    <FormMoreCategory lengthData={lengthFood} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </FormSelection>
          <FormSelection lengthFood={lengthBeverages || ""} name="Beverages">
            <div className={classes.flex}>
              {data.map(
                (x, e) =>
                  x.type === "beverages" ? (
                    e % 2 === 0 ? (
                      <div
                        key={`fade${e}`}
                        className={classes.imgflex}
                        style={
                          fade[e]
                            ? {
                                height:
                                  this.state.foodElement +
                                  this.state.foodElement / 2 +
                                  this.state.heightItem
                              }
                            : {
                                height: this.state.heightItem
                              }
                        }
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
                              src={x.image}
                              alt={x.image}
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
                          <div style={{ position: "absolute",top: "-2vw",left: "36vw"}}>
                          <img
                            src={contact}
                            alt="contact"
                            style={{
                              width: "7.5vw",
                              height: "auto",

                            }}
                          />
                          <MediaQuery query="(min-device-width: 600px)">
                          <span
                            style={{
                              width: "7.5vw",
                              height: "auto",
                              position: "absolute",
                              top: "1vw",
                              left: "0.3vw",
                              textAlign: "end",
                              fontSize: "10px"
                            }}
                          >
                            {x.participants.length}
                          </span>
                          </MediaQuery>
                          <MediaQuery query="(max-width: 600px)">
                          <span
                            style={{
                              width: "7.5vw",
                              height: "auto",
                              position: "absolute",
                              top: "-1vw",
                              left: "0.6vw",
                              textAlign: "end",
                              fontSize: "10px"
                            }}
                          >
                            {x.participants.length}
                          </span>
                          </MediaQuery>
                          </div>
                          <p className={classes.pflex}>{x.name}</p>
                        </div>
                        {fade[e] ? (
                          <div>
                            <div>
                              <img
                                src={check}
                                alt="check"
                                className={classes.img}
                                style={{
                                  position: "relative",
                                  bottom: this.state.heightItem + 39,
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
                                onClick={() => this.clickCheck(e)}
                                role="presentation"
                              />
                              <hr
                                style={{
                                  position: "relative",
                                  bottom: (this.state.heightItem * 4) / 3 + 25,
                                  left: 0,
                                  width: this.state.heightItem / 3
                                }}
                              />
                            </div>
                            <MediaQuery query="(min-device-width: 600px)">
                            <div
                              className={classes.bringForm}
                              style={{}}
                              ref={foodElement => {
                                this.foodElement = foodElement;
                              }}
                            >
                              <br />
                              <p>
                                {t("EventSelectPage.item.offer")}: Sebastian,
                                Oliver
                              </p>
                              <br />
                              <p>{x.description}</p>
                              <br />
                              <p>
                                {t("EventSelectPage.item.bring")} {x.name}?
                              </p>
                              <br />

                              <FormBringFood data={x} />
                            </div>
                            </MediaQuery>
                            <MediaQuery query="(max-device-width: 600px)">
                            <div
                              className={classes.bringForm2MobileLeft}
                              style={{}}
                              ref={foodElement => {
                                this.foodElement = foodElement;
                              }}
                            >
                              <br />
                              <p>
                                {t("EventSelectPage.item.offer")}: Sebastian,
                                Oliver
                              </p>
                              <br />
                              <p>{x.description}</p>
                              <br />
                              <p>
                                {t("EventSelectPage.item.bring")} {x.name}?
                              </p>
                              <br />

                              <FormBringFood data={x} />
                            </div>
                            </MediaQuery>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      <div
                        key={`fade${e}`}
                        className={classes.imgflex}
                        style={
                          fade[e]
                            ? {
                                height:
                                  this.state.foodElement +
                                  this.state.heightItem +
                                  this.state.foodElement / 2
                              }
                            : {
                                height: this.state.heightItem
                              }
                        }
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
                              src={x.image}
                              alt={x.image}
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
                          <div style={{ position: "absolute",top: "-2vw",left: "36vw"}}>
                          <img
                            src={contact}
                            alt="contact"
                            style={{
                              width: "7.5vw",
                              height: "auto",

                            }}
                          />
                          <MediaQuery query="(min-device-width: 600px)">
                          <span
                            style={{
                              width: "7.5vw",
                              height: "auto",
                              position: "absolute",
                              top: "1vw",
                              left: "0.3vw",
                              textAlign: "end",
                              fontSize: "10px"
                            }}
                          >
                            {x.participants.length}
                          </span>
                          </MediaQuery>
                          <MediaQuery query="(max-width: 600px)">
                          <span
                            style={{
                              width: "7.5vw",
                              height: "auto",
                              position: "absolute",
                              top: "-1vw",
                              left: "0.6vw",
                              textAlign: "end",
                              fontSize: "10px"
                            }}
                          >
                            {x.participants.length}
                          </span>
                          </MediaQuery>
                          </div>
                          <p className={classes.pflex}>{x.name}</p>
                        </div>
                        <div className="quee">
                          {fade[e] ? (
                            <div>
                              <div>
                                <img
                                  src={check}
                                  alt="check"
                                  className={classes.img}
                                  style={{
                                    position: "relative",
                                    bottom: this.state.heightItem + 39,
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
                                  onClick={() => this.clickCheck(e)}
                                  role="presentation"
                                />
                                <hr
                                  style={{
                                    position: "relative",
                                    bottom:
                                      (this.state.heightItem * 4) / 3 + 25,
                                    left: 0,
                                    width: this.state.heightItem / 3
                                  }}
                                />
                              </div>
                              <MediaQuery query="(min-device-width: 600px)">
                              <div
                                className={classes.bringFormOdd}
                                ref={foodElement => {
                                  this.foodElement = foodElement;
                                }}
                              >
                                <br />
                                <p>
                                  {t("EventSelectPage.item.offer")}: Sebastian,
                                  Oliver
                                </p>
                                <br />
                                <p>{x.description}</p>
                                <br />
                                <p>
                                  {t("EventSelectPage.item.bring")} {x.name}?
                                </p>
                                <br />
                                <FormBringFood data={x} />
                              </div>
                              </MediaQuery>
                              <MediaQuery query="(max-device-width: 600px)">
                              <div
                                className={classes.bringForm2Mobile}
                                ref={foodElement => {
                                  this.foodElement = foodElement;
                                }}
                              >
                                <br />
                                <p>
                                  {t("EventSelectPage.item.offer")}: Sebastian,
                                  Oliver
                                </p>
                                <br />
                                <p>{x.description}</p>
                                <br />
                                <p>
                                  {t("EventSelectPage.item.bring")} {x.name}?
                                </p>
                                <br />
                                <FormBringFood data={x} />
                              </div>
                              </MediaQuery>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    )
                  ) : (
                    ""
                  )
              )}

              <div
                className={classes.imgflex}
                style={
                  fadeCrane
                    ? { height: this.state.heightItem + 325 }
                    : {
                        height: this.state.heightItem
                      }
                }
              >
                <div className={classes.imgDiv}>
                  <div
                    className={classes.FlexPlus}
                    style={{
                      backgroundColor: "#f3f3f5"
                    }}
                  >
                    <img
                      src={crane}
                      alt="crane"
                      onClick={this.onClickCrane}
                      role="presentation"
                    />
                  </div>
                  <p className={classes.pflex}>{t("ChoosePage.OwnCreation")}</p>
                </div>
                {fadeCrane ? (
                  <div>
                    <img
                      src={check}
                      alt="check"
                      className={classes.img}
                      style={{
                        position: "relative",
                        bottom: this.state.heightItem + 39,
                        left: 0,
                        boxShadow: "none",
                        backgroundColor: "#0000004d",

                        display: "block",
                        margin: "auto"
                      }}
                      onClick={this.onClickCrane}
                      role="presentation"
                    />
                    <hr
                      style={{
                        position: "relative",
                        bottom: (this.state.heightItem * 4) / 3 + 25,
                        left: 0,
                        width: this.state.heightItem / 3
                      }}
                    />
                    <FormOwnCreation lengthData={lengthBeverages} />
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                className={classes.imgflex}
                style={
                  fadeMore
                    ? { height: this.state.heightItem + 520 }
                    : {
                        height: this.state.heightItem
                      }
                }
              >
                <div className={classes.imgDiv}>
                  <div
                    className={classes.FlexPlus}
                    onClick={this.onClickMore}
                    role="presentation"
                  >
                    <p className={classes.pPlus}>+</p>
                  </div>
                  <p className={classes.pflex}>{t("ChoosePage.more")}</p>
                </div>
                {fadeMore ? (
                  <div>
                    <img
                      src={check}
                      alt="check"
                      className={classes.img}
                      style={{
                        position: "relative",
                        bottom: this.state.heightItem + 39,
                        left: 0,
                        boxShadow: "none",
                        backgroundColor: "#0000004d",
                        display: "block",
                        margin: "auto"
                      }}
                      onClick={this.onClickMore}
                      role="presentation"
                    />
                    <hr
                      style={{
                        position: "relative",
                        bottom: this.state.heightItem * 4 / 3 + 25,
                        left: 0,
                        width: this.state.heightItem / 3
                      }}
                    />
                    <FormMoreCategory lengthData={lengthBeverages} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </FormSelection>
          <FormSelection
            name="Useful"
            lengthFood={this.props.item.length || ""}
          >
            <div style={{ width: "100%" }}>
              {" "}
              <FormUseFul />
            </div>
          </FormSelection>
          <div>
            <hr className="hrBring" />
          </div>
          <div>
            <BringInput submit2={this.props.submit2}>Bring</BringInput>
            <button className="buttonSelectionPage">
              I attend, but cannot bring something.
            </button>
            <button className="buttonSelectionPage">
              Unfortunatly I cannot attend at all.
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(
  translate("translations")(
    connect(state => ({ item: state.item }))(ContentSelectionPage)
  )
);

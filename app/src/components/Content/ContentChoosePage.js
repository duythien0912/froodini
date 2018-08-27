import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { translate } from "react-i18next";
import axios from "axios";

import check from "../../img/check.png";
import FormCreateAndShare from "../Forms/FormCreateAndShare";
import FormMoreCategory from "../Forms/FormMoreCategory";
import styles from "../Style/ContentChoosePage";

class ContentChoosePage extends Component {
  state = {
    data: [],
    fade: {
      fade0: false,
      fade1: false,
      fade2: false
    },

    image: {
      width: 0,
      height: 0
    },
    height: 0,
    heightDish: 0,
    heightForm: 0,
    heightTextDish: 0,
    fadeMore: false
  };

  componentWillMount = () => {
    this.updateDimensions();
  };

  componentDidMount = async () => {
    const res = await axios.get('/api/category');
    const body = res.data;
    this.setState({ data: body });
    window.addEventListener("resize", this.updateDimensions);
    this.updateDimensions();
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateDimensions);
  };

  onClickImg = fade => {
    this.updateHeightForm();

    const preFade = this.state.fade[fade];
    this.setState({
      fade: {
        [fade]: !preFade
      },
      fadeMore: false
    });
  };
  onClickMore = name => {
    const preFadeMore = this.state.fadeMore[name];

    this.setState({
      fadeMore: {
        [name]: !preFadeMore
      },
      fade: false
    });
  };
  onImgLoad = ({ target: img }) => {
    this.setState({
      image: {
        height: img.offsetHeight,
        width: img.offsetWidth
      }
    });
  };
  updateDimensions = () => {
    const height = this.divElement ? this.divElement.clientHeight : 0;
    const heightDish = this.imgDishElement
      ? this.imgDishElement.clientHeight
      : 0;
    const heightTextDish = this.textElement ? this.textElement.clientHeight : 0;
    this.setState({ height, heightDish, heightTextDish });
  };
  updateHeightForm = () => {
    const heightForm = this.formElement ? this.formElement.clientHeight : 0;
    this.setState({ heightForm });
  };
  render() {
    const { classes, t } = this.props;
    const { fade, data, fadeMore } = this.state;
    const { height, width } = this.state.image;
    return (
      <div>
        <div className={classes.content1}>
          {data.map(dataCategory => (
            <div key={dataCategory._id}>
              <div>
                <h1 className={classes.h1}>{dataCategory.nameCategory}</h1>
              </div>
              <div className={classes.flex}>
                {dataCategory.data.map(
                  (x, e) =>
                    e % 2 === 0 ? (
                      <div
                        key={x._id}
                        className={classes.imgflex}
                        ref={imgElement => {
                          this.imgElement = imgElement;
                        }}
                      >
                        <div
                          className={classes.imgDiv}
                          value={`fade${x.namedish}`}
                          onClick={() => this.onClickImg(`fade${x._id}`)}
                          role="presentation"
                          style={fade[`fade${x._id}`] ? {
                            height: this.state.heightDish + 230,
                            minHeight: 400
                          } : {}}
                        >
                          <div
                            className={classes.img}
                            ref={imgDishElement => {
                              this.imgDishElement = imgDishElement;
                            }}
                          >
                            <img
                              src={x.urlimg}
                              alt={x.urlimg}
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
                          {fade[`fade${x._id}`] ? (
                            <div style={{ position: "absolute" }}>
                              <img
                                src={check}
                                alt="check"
                                className={classes.img}
                                style={{
                                  position: "relative",
                                  bottom: this.state.heightDish,
                                  left: 0,
                                  boxShadow: "none",
                                  backgroundColor: "#0000004d"
                                }}
                              />
                              <hr
                                style={{
                                  position: "relative",
                                  bottom: this.state.heightDish * 4 / 3,
                                  left: 0,
                                  width: this.state.heightDish / 3
                                }}
                              />
                            </div>
                          ) : (
                              ""
                            )}
                          <p
                            className={classes.pflex}
                            ref={textElement => {
                              this.textElement = textElement;
                            }}
                            style={{
                              //position: "absolute",

                              bottom: fade[`fade${x._id}`]
                                ? this.state.heightDish - 10
                                : "",
                              left: 0,
                              width: "100%"
                            }}
                          >
                            {x.namedish}
                          </p>
                        </div>
                        {
                          fade[`fade${x._id}`] ? (
                            <div
                              style={{
                                top: this.state.heightDish + 50
                              }}
                              className={classes.detail}
                              ref={formElement => {
                                this.formElement = formElement;
                              }}
                            >
                              <FormCreateAndShare datas={x} />
                            </div>
                          ) : (
                              ""
                            )
                        }
                      </div>
                    ) : (
                        <div
                          key={`fade ${e}`}
                          className={fade[`fade${x._id}`] ? classes.imgflexChecked : classes.imgflex}
                          ref={imgElement => {
                            this.imgElement = imgElement;
                          }}
                        >
                          <div
                            className={classes.imgDiv}
                            value={`fade${x.namedish}`}
                            onClick={() => this.onClickImg(`fade${x._id}`)}
                            role="presentation"
                            style={fade[`fade${x._id}`] ? {
                              height: this.state.heightDish + 240,
                              minHeight: 400
                            } : {}}
                          >
                            <div
                              className={classes.img}
                              ref={imgDishElement => {
                                this.imgDishElement = imgDishElement;
                              }}
                            >
                              <img
                                src={x.urlimg}
                                alt={x.urlimg}
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
                            {fade[`fade${x._id}`] ? (
                              <div style={{ position: "absolute" }}>
                                <img
                                  src={check}
                                  alt="check"
                                  className={classes.img}
                                  style={{
                                    position: "relative",
                                    bottom: this.state.heightDish,
                                    left: 0,
                                    boxShadow: "none",
                                    backgroundColor: "#0000004d"
                                  }}
                                />
                                <hr
                                  style={{
                                    position: "relative",
                                    bottom: this.state.heightDish * 4 / 3,

                                    left: 0,
                                    width: this.state.heightDish / 3
                                  }}
                                />
                              </div>
                            ) : (
                                ""
                              )}
                            <p
                              className={classes.pflex}
                              style={{
                                //position: "absolute",
                                bottom: fade[`fade${x._id}`]
                                  ? this.state.heightDish - 10
                                  : "",
                                left: 0,
                                width: "100%"
                              }}
                            >
                              {x.namedish}
                            </p>
                          </div>
                          {fade[`fade${x._id}`] ? (
                            <div
                              style={{
                                top: this.state.heightDish + 50
                              }}
                              className={classes.detail1}
                              ref={formElement => {
                                this.formElement = formElement;
                              }}
                            >
                              <FormCreateAndShare datas={x} />
                            </div>
                          ) : (
                              ""
                            )}
                        </div>
                      )
                )}

                <div
                  className={classes.imgflex}
                  style={
                    fadeMore[dataCategory.nameCategory]
                      ? { height: this.state.height + 530 }
                      : {}
                  }
                  ref={divElement => {
                    this.divElement = divElement;
                  }}
                >
                  <div className={classes.imgDiv}>
                    <div
                      className={classes.FlexPlus}
                      onClick={() =>
                        this.onClickMore(dataCategory.nameCategory)
                      }
                      role="presentation"
                    >
                      <p className={classes.pPlus}>+</p>
                    </div>
                    <p className={classes.pflex}>{t("ChoosePage.more")}</p>
                    {fadeMore[dataCategory.nameCategory] ? (
                      <div>
                        <img
                          src={check}
                          alt="check"
                          className={classes.imgPlus}
                          style={{
                            position: "relative",
                            bottom: this.state.heightDish + 25,
                            left: 0,
                            boxShadow: "none",
                            backgroundColor: "#0000004d"
                          }}
                          onClick={() =>
                            this.onClickMore(dataCategory.nameCategory)
                          }
                          role="presentation"
                        />
                        <hr
                          style={{
                            position: "relative",
                            bottom: this.state.heightDish * 4 / 3 + 25,
                            left: 0,
                            width: this.state.heightDish / 3
                          }}
                        />
                      </div>
                    ) : (
                        ""
                      )}
                  </div>
                  {fadeMore[dataCategory.nameCategory] ? (
                    <FormMoreCategory
                      lengthData={dataCategory.data.length + 1}
                    />
                  ) : (
                      ""
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(translate("translations")(ContentChoosePage));

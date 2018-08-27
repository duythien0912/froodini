import React, { Component } from "react";
import { withStyles } from "material-ui/styles";

import FormBringFood from "../Forms/FormBringFood";
import contact from "../../img/contact.png";
import check from "../../img/check.png";
import styles from "../Style/ContentSelectionPage";

class FormFood extends Component {
  state = {
    image: {
      height: 0,
      width: 0
    }
  };
  onImgLoad = ({ target: img }) => {
    this.setState({
      image: {
        height: img.offsetHeight,
        width: img.offsetWidth
      }
    });
  };

  render() {
    const { x, e, fade, classes, onClickImg } = this.props;
    const { width, height } = this.state.image;
    return e % 2 === 0 ? (
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
            : {}
        }
      >
        <div
          className={classes.imgDiv}
          value={e}
          onClick={() => onClickImg(e)}
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
          <img
            src={contact}
            alt="contact"
            style={{
              width: "7.5vw",
              height: "auto",
              position: "absolute",
              left: "36vw",
              top: "-2vw"
            }}
          />
          <span
            style={{
              width: "7.5vw",
              height: "auto",
              position: "absolute",
              top: "-2vw",
              left: "36vw",
              textAlign: "end",
              fontSize: "10px"
            }}
          >
            {x.participants.length}
          </span>
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
                onClick={() => this.clickCheck(e)}
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
            </div>

            <div
              className={classes.bringForm}
              style={{}}
              ref={foodElement => {
                this.foodElement = foodElement;
              }}
            >
              <p>Wird bereits mitgebracht von: Sebastian, Oliver</p>
              <br />
              <br />
              <p>{x.description}</p>
              <br />

              <p>
                Passende Rezepte findest du auf einer deiner lieblings
                Kochportale.
              </p>
              <br />

              <p>For how many people you bring Brötchen?</p>
              <br />

              <FormBringFood data={x} />
            </div>
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
            : {}
        }
      >
        <div
          className={classes.imgDiv}
          value={e}
          onClick={() => onClickImg(e)}
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
          <img
            src={contact}
            alt="contact"
            style={{
              width: "7.5vw",
              height: "auto",
              position: "absolute",
              top: "-2vw",
              left: "36vw"
            }}
          />
          <span
            style={{
              width: "7.5vw",
              height: "auto",
              position: "absolute",
              top: "-2vw",
              left: "36vw",
              textAlign: "end",
              fontSize: "10px"
            }}
          >
            {x.participants.length}
          </span>
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
                  onClick={() => this.clickCheck(e)}
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
              </div>
              <div
                className={classes.bringFormOdd}
                ref={foodElement => {
                  this.foodElement = foodElement;
                }}
              >
                <p>Wird bereits mitgebracht von: Sebastian, Oliver</p>
                <br />
                <br />
                <p>{x.description}</p>
                <p>
                  Passende Rezepte findest du auf einer deiner lieblings
                  Kochportale.
                </p>
                <p>For how many people you bring Brötchen?</p>
                <br />
                <FormBringFood data={x} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FormFood);

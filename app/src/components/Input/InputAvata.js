import React, { Component } from "react";

import { connect } from "../store";

class InputAvata extends Component {
  state = {
    image: null,
    width: 0,
    height: 0
  };

  onImgLoad = ({ target: img }) => {
    this.setState({
      height: img.offsetHeight,
      width: img.offsetWidth
    });
  };

  handleChange = selectorFiles => {
    const reader = new FileReader();
    const data = new FormData();

    data.append("file", selectorFiles);
    this.props.actions.uploadImage(data);

    reader.onloadend = () => {
      this.setState({
        image: reader.result
      });
    };
    if (selectorFiles) reader.readAsDataURL(selectorFiles);
  };

  render() {
    const { width, height } = this.state;
    return (
      <label htmlFor="files">
        <div className="inputAvata">
          {this.state.image ? (
            <div>
              <img
                className={`
                ${
                  width === height
                    ? "square"
                    : width > height
                      ? "imagelandscape"
                      : "imageportrait"
                } UserFroodiniLogo`}
                src={this.state.image}
                alt="Froodini"
                onLoad={this.onImgLoad}
              />
            </div>
          ) : (
            ""
          )}
          <input
            type="file"
            id="files"
            name="file"
            style={{ display: "none" }}
            onChange={e => this.handleChange(e.target.files[0])}
            accept="image/*"
          />
        </div>
      </label>
    );
  }
}

export default connect(state => ({ eventData: state.eventData }))(InputAvata);

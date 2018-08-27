import React, { Component } from "react";

class NavCreateBy extends Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "40px",
          background: "#3d3d42",
          position: "relative"
        }}
      >
        <p
          style={{
            position: "absolute" /* 2 */,
            top: "50%" /* 3 */,
            left: "10%",
            transform: "translate(0, -50%)",
            color: "white",
            fontSize: 10
          }}
        >
          created by 3 guys with heart
        </p>
        <p
          style={{
            position: "absolute" /* 2 */,
            top: "50%" /* 3 */,
            right: "10%",
            transform: "translate(0, -50%)",
            color: "white",
            fontSize: 10
          }}
        >
          Imprint & Privacy
        </p>
      </div>
    );
  }
}

export default NavCreateBy;

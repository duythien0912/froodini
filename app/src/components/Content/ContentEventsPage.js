import React, { Component } from "react";

import { connect } from "../store";

class ContentEventsPage extends Component {
  componentDidMount = () => {
    this.props.actions.getListEvent();
  };
  render() {
    const { listEvent } = this.props;

    return (
      <div
        style={{
          minWidth: "100vw",
          minHeight: "100vh"
        }}
      >
        <ol
          className="custom-counter"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          {listEvent
            ? listEvent.map(data => (
                <li key={data._id}>
                  <a href={'event/${data._id}'}>{data.name}</a>
                </li>
              ))
            : "error get data"}
        </ol>
      </div>
    );
  }
}

export default connect(state => ({ listEvent: state.listEvent }))(
  ContentEventsPage
);

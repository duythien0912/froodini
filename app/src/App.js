import React, { Component } from "react";
import { Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HostPage from "./components/Pages/HostPage";
import LandingPage from "./components/Pages/LandingPage";
import ChoosePage from "./components/Pages/ChoosePage";
import SelectionPage from "./components/Pages/SelectionPage";
import EventUserPage from "./components/Pages/EventUserPage";
import DashBoardPage from "./components/Pages/DashBoardPage";
import DashBoardPageFood from "./components/Pages/DashBoardPageFood";
import DashBoardPageCategory from "./components/Pages/DashBoardPageCategory";
import DashBoardPageEvent from "./components/Pages/DashBoardPageEvent";
import DashBoardPageUser from "./components/Pages/DashBoardPageUser";

class App extends Component {
  componentDidMount() {
    const ele = document.getElementById("loading-spinner");
    ele.outerHTML = "";
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <div>
              <Route location={location} path="/" exact component={HostPage} />
              <Route
                location={location}
                path="/landing"
                exact
                component={LandingPage}
              />
              <Route
                location={location}
                path="/choose"
                exact
                component={ChoosePage}
              />
              <Route
                location={location}
                path="/selection"
                exact
                component={SelectionPage}
              />
              <Route
                location={location}
                path="/event"
                exact
                component={DashBoardPage}
              />
              <Route
                location={location}
                path="/admin/food"
                exact
                component={DashBoardPageFood}
              />
               <Route
                location={location}
                path="/admin/category"
                exact
                component={DashBoardPageCategory}
              />
              <Route
                location={location}
                path="/admin/event"
                exact
                component={DashBoardPageEvent}
              />
              <Route
                location={location}
                path="/admin/user"
                exact
                component={DashBoardPageUser}
              />
              <Route
                location={location}
                path="/event/:id"
                exact
                component={EventUserPage}
              />
              <Route
                location={location}
                path="/dashboard"
                exact
                component={DashBoardPage}
              />

            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;

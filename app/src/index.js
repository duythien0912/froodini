import React from "react";
import ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import "./index.css";
import configureHistory from "./configureHistory";
import { Provider } from "./components/store";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "./i18n";

const history = configureHistory();

const theme = createMuiTheme({});

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={rootEl}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <Route component={App} />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
 registerServiceWorker();

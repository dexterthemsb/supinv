import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import App from "./App";

import store from "./store";
import { theme } from "./theme";

import reportWebVitals from "./reportWebVitals";

render(
  <StrictMode>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </MuiThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

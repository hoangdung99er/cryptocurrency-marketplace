import * as React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { CssBaseline, GlobalStyles } from "@mui/material";
import DarkModeProvider from "./Context/DarkModeContext";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const inputGlobalStyles = (
  <GlobalStyles
    styles={{
      a: {
        textDecoration: "none",
        "&:active": { color: "inherit" },
      },
      body: {
        overflowX: "hidden",
      },
    }}
  />
);

ReactDOM.render(
  <CssBaseline>
    <DarkModeProvider>
      <Router>
        <Provider store={store}>
          <App />
          {inputGlobalStyles}
        </Provider>
      </Router>
    </DarkModeProvider>
  </CssBaseline>,
  document.getElementById("root")
);

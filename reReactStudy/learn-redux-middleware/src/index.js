import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer from "./modules";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
import { thunk } from "redux-thunk";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

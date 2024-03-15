import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import rootReducer, { rootSaga } from "./modules";
// import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger";
// 18.3.1.2 미들웨어 적용하기
import { thunk } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));
// 18.2.2 redux-logger 사용하기
// const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk, sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

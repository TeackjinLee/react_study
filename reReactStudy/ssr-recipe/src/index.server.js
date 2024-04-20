import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

const app = express();

// 서버사이드 렌더링을 처리할 핸들러 함수입니다.
const serverRender = (req, res, next) => {
  // 이 함수는 404가 떠야 하는 사오항에 404를 뛰우지 않고 서버 사이드 렌더링을 해 줍니다.
  const context = [];
  const jsx = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  const root = ReactDOMServer.renderToString(jsx);
  res.send(root);
};

app.use(serverRender);

// 5000포트로 서버를 기동합니다.
app.listen(5500, () => {
  console.log("Runnig on http://localhost:5500");
});

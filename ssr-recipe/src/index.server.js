import React from "react";
import ReactDOMServer from "react-dom/server";
// 20.3.1 서버사이드렌더링용 엔트리 만들기
const html = ReactDOMServer.renderToString(
  <div>Hello Server Side Rendering!</div>
);

console.log(html);

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import notify from "./notify";
// 19.2.3 Loadable Components를 통한 코드 스플리팅
import loadable from "@loadable/component";
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

// 19.2.2 React.lazy와 Suspense 사용하기
// const SplitMe = React.lazy(() => import("./SplitMe"));

function App() {
  const [visible, setVisible] = useState(false);

  // 19.1 자바스크립트 함수 비동기 로딩
  const onClick = () => {
    // notify();
    // import("./notify").then((result) => result.default());
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App=logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;

import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
// import notify from "./notify";

const SplitMe = React.lazy(() => import("./SplitMe"));

function App() {
  // 19.2.2 React.lazy와 Suspense 사용하기
  const [visible, setVisible] = useState(false);

  // 19.1 자바스크립트 함수 비동기 로딩
  const onClick = () => {
    // notify();
    // import("./notify").then((result) => result.default());
    setVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App=logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import notify from "./notify";

function App() {
  // 19.1 자바스크립트 함수 비동기 로딩
  const onClick = () => {
    // notify();
    import("./notify").then((result) => result.default());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App=logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;

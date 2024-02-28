import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
// 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

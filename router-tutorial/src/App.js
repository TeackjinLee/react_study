import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
// 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결
const App = () => {
  return (
    // 13.2.5 Link 컴포넌트를 사용하여 다른 주소로 이동하기
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;

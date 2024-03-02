import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

// 13.2.4 Route 컴포넌트로 특정 주소에 컴포넌트 연결
const App = () => {
  const { pathname } = useLocation(); // 추가
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
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        {/* <Route path="/profile/:username" element={<Profile />} /> */}
        <Route path="/profiles/*" element={<Profiles />} />
        <Route path="/history" element={<HistorySample />} />
        <Route
          path="/*"
          element={<h1>이 페이지는 존재하지 않습니다. - {pathname}</h1>}
        />
      </Routes>
    </div>
  );
};

export default App;

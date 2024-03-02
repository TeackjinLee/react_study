import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
//13.5 서브 라우트
const Profiles = () => {
  // 13.6.4 NavLink
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) => {
              return isActive ? activeStyle : {};
            }}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            style={({ isActive }) => {
              return isActive ? activeStyle : {};
            }}
          >
            gildong
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element="유저를 선택해주세요" />
        <Route path=":username" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Profiles;

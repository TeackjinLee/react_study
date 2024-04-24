import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import RedPage from "./pages/RedPage";
import BluePage from "./pages/BluePage";
import UsersPage from "./pages/UsersPage";
import UserContainer from "./containers/UserContainer";

import "./App.css";

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" element={<RedPage />} />
        <Route path="/blue" element={<BluePage />} />
        <Route path="/users/*" element={<UsersPage />} />
        <Route path="/users/:mov" element={<UserContainer />} />
      </Routes>
    </div>
  );
};

export default App;

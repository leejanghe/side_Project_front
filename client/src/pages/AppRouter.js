import React from "react";
// router import
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/common/Header";
import Home from "./Home";
import Login from "./Login";
import Sign from "./Sign";
function AppRouter(props) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

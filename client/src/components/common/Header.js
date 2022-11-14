import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div>Header</div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/sign">Sign</Link>
    </>
  );
}

export default Header;

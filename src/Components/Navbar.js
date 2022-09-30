import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbarConatiner">
      <Link to="/colorScheme/red">
        <div style={{ marginLeft: "15px" }}>
          <Button data="Red" />
        </div>
      </Link>
      <Link to="/colorScheme/green">
        <div style={{ marginLeft: "15px" }}>
          <Button data="Green" />
        </div>
      </Link>
      <Link to="/colorScheme/yellow">
        <div style={{ marginLeft: "15px" }}>
          <Button data="Yellow" />
        </div>
      </Link>
      <Link to="/colorScheme/pink">
        <div style={{ marginLeft: "15px" }}>
          <Button data="Pink" />
        </div>
      </Link>
    </div>
  );
}

export default Navbar;

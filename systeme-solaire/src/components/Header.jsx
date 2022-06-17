import React from "react";
import logo from "../style/img/logo-w.png";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <img src={logo} alt="" />
        <h4>Le systeme solaire</h4>
        <p>animé</p>
      </div>
    </div>
  );
}

export default Header;

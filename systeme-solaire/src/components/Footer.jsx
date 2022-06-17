import React from "react";
import logo from "../style/img/logo-w.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="logo">
        <img src={logo} alt=" " />
      </div>
      <div className="credit">
        <p>Système Solaire Animé - 2022</p>
      </div>
      <div className="social-media">
        <a href="https://github.com/David-Chazoule">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/david-chazoule/?originalSubdomain=fr">
          <i class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;

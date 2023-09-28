import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <ul className="footer">
      <li>©️ Copyright - Barbara Papa</li>
      <li>©️ Copyright - Masouma Rasouli</li>
      <li>
        {" "}
        <div className="imageHolder">
          {" "}
          <img src="/polygon-1@2x.png" alt="" />
          <div className="thanks"> Thanks for Watching</div>
        </div>
      </li>
      <li>©️ Copyright - Diego LLerena</li>
      <li>©️ Copyright - Deolindo Baptista</li>
    </ul>
  );
}

export default Footer;

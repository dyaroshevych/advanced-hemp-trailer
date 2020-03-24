import React from "react";

import { ContactInfo } from "./";

const Footer = () => (
  <div className="section-container">
    <footer className="footer section">
      <div className="wrapper">
        <ContactInfo
          className="footer__links"
          info={["phone", "email", "location"]}
        />
        <ContactInfo
          className="footer__social"
          info={["instagram", "facebook", "linkedin"]}
        />
      </div>
    </footer>
  </div>
);

export default Footer;

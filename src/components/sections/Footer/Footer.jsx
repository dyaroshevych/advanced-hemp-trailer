import React from "react";

import { Section, Wrapper } from "../../../hoc";
import { ContactInfo } from "../../UI";

import "./Footer.scss";

const Footer = () => (
  <Section className="Footer" id="footer">
    <Wrapper className="Footer_content">
      <ContactInfo
        className="Footer_links"
        data={["phone", "email", "location"]}
      />
      <ContactInfo
        className="Footer_social"
        data={["instagram", "facebook", "linkedin"]}
      />
    </Wrapper>
  </Section>
);

export default Footer;

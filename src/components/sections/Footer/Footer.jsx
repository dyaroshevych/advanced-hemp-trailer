import React from "react";

import Section from "../../../hoc/Section/Section";
import Wrapper from "../../../hoc/Wrapper/Wrapper";
import ContactInfo from "../../UI/ContactInfo/ContactInfo";

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
        data={["linkedin", "facebook", "twitter", "instagram"]}
      />
    </Wrapper>
  </Section>
);

export default Footer;

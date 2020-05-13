import React, { useContext } from "react";
import { Fade } from "react-reveal";

import { ContactContext } from "../../../context";

import "./ContactInfo.scss";

const ContactInfo = ({ className = "", data }) => {
  const contactData = useContext(ContactContext);

  return (
    <ul className={className}>
      {data.map((contactItem, idx) => (
        <li className="ContactInfo_linkContainer" key={idx}>
          <Fade delay={idx * 100}>
            <a
              className="ContactInfo_link"
              href={contactData[contactItem].link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="ContactInfo_linkIcon">
                {contactData[contactItem].icon}
              </span>
              {contactData[contactItem].content}
            </a>
          </Fade>
        </li>
      ))}
    </ul>
  );
};

export default ContactInfo;

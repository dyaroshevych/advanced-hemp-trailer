import React from "react";
import { Fade } from "react-reveal";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn
} from "react-icons/fa";

const contactData = {
  phone: {
    icon: <FaPhone />,
    content: "+1 (800) 860-1360",
    link: "tel:+1 (800) 860-1360"
  },
  email: {
    icon: <FaEnvelope />,
    content: "info@advancedhempdryer.com",
    link: "mailto:info@advancedhempdryer.com"
  },
  location: {
    icon: <FaMapMarkerAlt />,
    content: "405 Keaton Street Vienna, Georgia 31092",
    link: "https://goo.gl/maps/2M4sm64oihfkPGrNA"
  },
  instagram: {
    icon: <FaInstagram />,
    content: "",
    link: ""
  },
  facebook: {
    icon: <FaFacebookF />,
    content: "",
    link: ""
  },
  linkedin: {
    icon: <FaLinkedinIn />,
    content: "",
    link: ""
  }
};

const ContactInfo = ({ className = "", info }) => (
  <ul className={className}>
    {info.map((contactItem, idx) => (
      <li className="contact-info__link-container" key={idx}>
        <Fade delay={idx * 100}>
          <a
            className="contact-info__link"
            href={contactData[contactItem].link}
          >
            <span className="contact-info__link-icon">
              {contactData[contactItem].icon}
            </span>
            {contactData[contactItem].content}
          </a>
        </Fade>
      </li>
    ))}
  </ul>
);

export default ContactInfo;

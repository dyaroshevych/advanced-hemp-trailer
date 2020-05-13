import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const ContactContext = React.createContext({
  phone: {
    icon: <FaPhone />,
    content: "+1 (800) 860-1360",
    link: "tel:+1 (800) 860-1360",
  },
  email: {
    icon: <FaEnvelope />,
    content: "Ava@AdvancedHempDryer.com",
    link: "mailto:Ava@AdvancedHempDryer.com",
  },
  location: {
    icon: <FaMapMarkerAlt />,
    content: "405 Keaton Street Vienna, Georgia 31092",
    link: "https://goo.gl/maps/2M4sm64oihfkPGrNA",
  },
  linkedin: {
    icon: <FaLinkedinIn />,
    content: "",
    link: "https://www.linkedin.com/company/advancedhempdryer/",
  },
  facebook: {
    icon: <FaFacebookF />,
    content: "",
    link: "https://www.facebook.com/AdvancedHempDry/",
  },
  twitter: {
    icon: <FaTwitter />,
    content: "",
    link: "https://twitter.com/AdvancedHempDry",
  },
  instagram: {
    icon: <FaInstagram />,
    content: "",
    link: "https://www.instagram.com/advancedhempdry/",
  },
});

export default ContactContext;

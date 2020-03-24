import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-reveal";

import { ContactInfo, Popup, Button, Form } from "./";

import logoPng from "../assets/img/logo.png";

const Navigation = ({ links }) => {
  const [formOpened, setFormOpened] = useState(false);

  const toggleForm = () => {
    setFormOpened(!formOpened);
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list wrapper">
        <li>
          <ContactInfo
            className="navigation__links"
            info={["phone", "email"]}
          />
        </li>
        <li className="navigation__logo-container">
          <Fade>
            <ScrollLink
              activeClass="active"
              to="header"
              spy
              smooth
              duration={500}
              offset={-130}
            >
              <img
                className="navigation__logo"
                src={logoPng}
                alt="Advanced Hemp Dryer"
              />
            </ScrollLink>
          </Fade>
        </li>
        <li className="navigation__link-container" onClick={toggleForm}>
          <Fade delay={links.length * 100}>
            <Button color="green">Get In Touch</Button>
          </Fade>
        </li>
      </ul>
      <Popup
        items={[
          <Form
            fields={[
              {
                name: "Your name",
                required: true
              },
              {
                name: "Your number",
                required: true,
                type: "tel"
              },
              {
                name: "Your email",
                required: true,
                type: "email"
              },
              {
                name: "Notes...",
                tag: "textarea"
              }
            ]}
            setPopup={toggleForm}
          />
        ]}
        info={{ isOpened: formOpened, activeIdx: 0 }}
        setPopup={toggleForm}
      />
    </nav>
  );
};

export default Navigation;

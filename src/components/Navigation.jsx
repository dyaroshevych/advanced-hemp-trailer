import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-reveal";

import { Popup, Button, Form } from "./";

import logoPng from "../assets/img/logo.png";

const Navigation = ({ links }) => {
  const [formOpened, setFormOpened] = useState(false);

  const toggleForm = () => {
    setFormOpened(!formOpened);
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list wrapper">
        <li className="navigation__logo-container">
          <Fade>
            <ScrollLink
              activeClass="active"
              to="header"
              spy
              smooth
              duration={500}
              offset={-70}
            >
              <img
                className="navigation__logo"
                src={logoPng}
                alt="Advanced Hemp Dryer"
              />
            </ScrollLink>
          </Fade>
        </li>
        <li>
          <ul className="navigation__links">
            {links.map((link, idx) => (
              <li className="navigation__link-container" key={idx}>
                <Fade delay={idx * 100}>
                  <ScrollLink
                    className="navigation__link"
                    activeClass="active"
                    to={link.id}
                    spy
                    smooth
                    offset={-70}
                    duration={500}
                  >
                    {link.id.split("-").join(" ")}
                  </ScrollLink>
                </Fade>
              </li>
            ))}
            <li className="navigation__link-container" onClick={toggleForm}>
              <Fade delay={links.length * 100}>
                <Button color="green">Contact Us</Button>
              </Fade>
            </li>
          </ul>
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

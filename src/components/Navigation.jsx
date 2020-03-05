import React from "react";

import { Link as ScrollLink } from "react-scroll";
import { Fade } from "react-reveal";

import logoPng from "../assets/img/logo.png";

const Navigation = ({ links }) => (
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
                  {link.name}
                </ScrollLink>
              </Fade>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  </nav>
);

export default Navigation;

import React from "react";
import { Fade } from "react-reveal";

const Header = () => {
  return (
    <Fade delay={250}>
      <div className="section-container">
        <header className="header">
          <div className="header__background"></div>
          <div className="header__container wrapper">
            <Fade up>
              <div className="header__text-container">
                <h1 className="heading-primary underlined">
                  A New and Advanced Hemp Drying System is here
                </h1>
              </div>
            </Fade>
          </div>
        </header>
      </div>
    </Fade>
  );
};

export default Header;

import React from "react";
import { Fade } from "react-reveal";

const Header = () => (
  <Fade delay={250}>
    <header className="header">
      <div className="header__background"></div>
      <div className="header__container wrapper">
        <Fade up>
          <div className="header__text-container">
            <h1 className="heading-primary underlined">
              A new and advanced hemp drying system is here.
            </h1>
            <Fade delay={100} up>
              <h5 className="subheading-primary">
                For over 20 years, we have been an industry leader in providing
                a product that has been used for drying various agricultural
                products. Now, we are bringing this same technology to the hemp
                industry. Our dryer provides a cost effective and transportable
                means of drying hemp.
              </h5>
            </Fade>
            <div className="header__buttons-container">
              <button className="button button--green">Play Video</button>
              <button className="button button--gray">Buy Now</button>
            </div>
          </div>
        </Fade>
      </div>
    </header>
  </Fade>
);

export default Header;

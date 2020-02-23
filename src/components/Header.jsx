import React from "react";
import { Fade } from "react-reveal";

const Header = () => (
  <Fade delay={250}>
    <header className="header">
      <div className="header__background"></div>
      <div className="header__container wrapper">
        <Fade left>
          <div className="header__text-container">
            <h1 className="heading-primary underlined">
              The Future of Hemp Drying is here.
            </h1>
            <Fade delay={250} left>
              <h5 className="subheading-primary">
                Stop spending excessive money on industrial dryers that are both
                inefficient in drying and unable to be transported. Start using
                the first ever high volume, transportable hemp dryer.
              </h5>
            </Fade>
            <div className="header__buttons-container">
              <Fade delay={1000}>
                <div className="button button--green">Play Video</div>
              </Fade>
              <Fade delay={1250}>
                <div className="button button--gray">Buy Now</div>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </header>
  </Fade>
);

export default Header;

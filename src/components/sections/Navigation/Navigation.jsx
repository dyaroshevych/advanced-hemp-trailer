import React, { useState } from "react";
import { Fade } from "react-reveal";

import { Wrapper } from "../../../hoc";
import { Modal, Button, Form, Logo, ContactInfo } from "../../UI";

import "./Navigation.scss";

const Navigation = () => {
  const [formOpened, setFormOpened] = useState(false);

  const toggleForm = () => {
    setFormOpened(!formOpened);
  };

  return (
    <nav className="Navigation">
      <Wrapper>
        <ul className="Navigation_list">
          <li>
            <ContactInfo data={["phone", "email"]} />
          </li>
          <li className="Navigation_logoContainer">
            <Fade>
              <Logo />
            </Fade>
          </li>
          <li className="Navigation_linkContainer" onClick={toggleForm}>
            <Fade delay={100}>
              <Button color="green">Get In Touch</Button>
            </Fade>
          </li>
        </ul>
      </Wrapper>
      <Modal isVisible={formOpened} toggleVisibility={toggleForm}>
        <Form
          fields={[
            {
              name: "Your name",
              required: true,
            },
            {
              name: "Your number",
              required: true,
              type: "tel",
            },
            {
              name: "Your email",
              required: true,
              type: "email",
            },
            {
              name: "Notes...",
              tag: "textarea",
            },
          ]}
          setPopup={toggleForm}
        />
      </Modal>
    </nav>
  );
};

export default Navigation;

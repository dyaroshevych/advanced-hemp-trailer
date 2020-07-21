import React, { useState } from "react";
import { Fade } from "react-reveal";

import Wrapper from "../../../hoc/Wrapper/Wrapper";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import Form from "../../UI/Form/Form";
import Logo from "../../UI/Logo/Logo";
import ContactInfo from "../../UI/ContactInfo/ContactInfo";

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
          <li className="Navigation_contactInfoContainer">
            <ContactInfo
              className="Navigation_contactInfo"
              data={["phone", "email"]}
            />
          </li>
          <li className="Navigation_logoContainer">
            <Fade>
              <Logo />
            </Fade>
          </li>
          <li onClick={toggleForm}>
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
              name: "name",
              placeholder: "Your name",
              required: true,
            },
            {
              name: "number",
              placeholder: "Your number",
              required: true,
              type: "tel",
            },
            {
              name: "_replyto",
              placeholder: "Your email",
              required: true,
              type: "email",
            },
            {
              name: "notes",
              placeholder: "Notes...",
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

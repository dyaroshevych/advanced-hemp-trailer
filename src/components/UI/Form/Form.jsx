import React from "react";

import Button from "../Button/Button";

import "./Form.scss";

const Form = ({ fields }) => (
  <form className="Form" method="POST" action="https://formspree.io/xlepdory">
    <h3>Contact us</h3>
    {fields.map(
      ({
        name,
        placeholder,
        required = false,
        type = "text",
        tag = "input",
      }) => (
        <div className="Form_field" key={`Form-${name.split(" ").join("-")}`}>
          {tag === "input" ? (
            <input
              className="Form_input"
              {...{ name, placeholder, type, required }}
              aria-label={placeholder}
            />
          ) : (
            <textarea
              className="Form_textarea"
              {...{ name, placeholder, type, required }}
              rows={3}
              aria-label={placeholder}
            ></textarea>
          )}
        </div>
      )
    )}
    <Button color="gray">Submit</Button>
  </form>
);

export default Form;

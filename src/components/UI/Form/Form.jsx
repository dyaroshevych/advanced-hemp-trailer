import React from "react";

import { Button } from "../";

import "./Form.scss";

const Form = ({ fields }) => (
  <form className="Form" method="POST" action="https://formspree.io/xjlqzbvx">
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
          <label
            className="Form_label"
            htmlFor={`Form-${name.split(" ").join("-")}`}
          >
            {placeholder}
          </label>
          {tag === "input" ? (
            <input
              className="Form_input"
              {...{ name, placeholder, type, required }}
              id={`Form-${name.split(" ").join("-")}`}
            />
          ) : (
            <textarea
              className="Form_textarea"
              {...{ name, placeholder, type, required }}
              rows={3}
              id={`Form-${name.split(" ").join("-")}`}
            ></textarea>
          )}
        </div>
      )
    )}
    <input type="hidden" name="_next" value="https://advancedhempdryer.com/" />
    <Button color="gray">Submit</Button>
  </form>
);

export default Form;

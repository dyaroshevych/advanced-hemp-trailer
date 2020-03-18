import React from "react";
import { FaTimes } from "react-icons/fa";

import { Button } from "./";

const Form = ({ fields, setPopup }) => {
  return (
    <form className="form" method="POST" action="">
      <div className="form__close-button" onClick={setPopup}>
        <FaTimes />
      </div>
      <h3 className="heading-tertiary">Contact us</h3>
      {fields.map(
        ({ name, required = false, type = "text", tag = "input" }) => (
          <div
            className="form__field"
            key={`form-${name.split(" ").join("-")}`}
          >
            <label
              className="form__label"
              htmlFor={`form-${name.split(" ").join("-")}`}
            >
              {name}
            </label>
            {tag === "input" ? (
              <input
                className="form__input"
                placeholder={name}
                type={type}
                required={required}
                id={`form-${name.split(" ").join("-")}`}
              />
            ) : (
              <textarea
                className="form__textarea"
                placeholder={name}
                type={type}
                required={required}
                rows={3}
                id={`form-${name.split(" ").join("-")}`}
              ></textarea>
            )}
          </div>
        )
      )}
      <Button color="gray">Submit</Button>
    </form>
  );
};

export default Form;

import React from "react";
import { useState } from "react";
import './Assets/styles/Form.css'



const FormElement = ({ id, name, type, placeholder, label, required, errorMessage, handleInputChange }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  if (name === 'message') {
    return (
      <div>
        <label
          className="mt-2"
        >{label}</label>
        <textarea
          key={id}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={handleInputChange}
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
          className="form-control mt-2"
          rows="5"
          required={required}
        />
        <span>{errorMessage}</span>
      </div>
    );
  } else {
    return (
      <div>
        <label>{label}</label>
        <input
          key={id}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={handleInputChange}
          onBlur={handleFocus}
          onFocus={() => setFocused(true)}
          focused={focused.toString()}
          className="form-control mt-2"
          required={required}
        />
        <span>{errorMessage}</span>
      </div>
    );
  }
};

export default FormElement
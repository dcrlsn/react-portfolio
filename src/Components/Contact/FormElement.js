import React from "react";
import { useState } from "react";
import './Assets/styles/Form.css'



const FormElement = ({ id, name, type, placeholder, label, required, errorMessage, onChange, value }) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
  };

  const htmlTags = {
    key: id,
    name: name,
    placeholder: placeholder,
    type: type,
    onChange: onChange,
    onBlur: handleFocus,
    focused: focused.toString(),
    className: "form-control mt-2",
    rows: "5",
    value: value,
    required: required,
    minLength: 2,
  }


  return (
    <div>
      <label
        className="mt-2"
      >{label}</label>
      {name === 'message' ? <textarea {...htmlTags} /> : <input {...htmlTags} />}
      <span className="error">{value.length > 0 && errorMessage}</span>
    </div>
  );
};

export default FormElement
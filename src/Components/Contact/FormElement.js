import React from "react";



function FormElement({ value, name, handleInputChange }) {
  let input = name
  if (name === "userName") {
    input = "text"
  } else if (name === "message") input = "textarea"
  let placeholder = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  if (name === "message") {
    return (
      <>
        <label for={name} className="mt-2">{placeholder}</ label>
        <textarea
          rows="5"
          value={value || ''}
          name={name}
          onChange={handleInputChange}
          type={input}
          placeholder={placeholder}
          className="form-control mt-2"
        />
      </>
    )
  } else {
    return (
      <>
        <label for={(name === "userName") ? "Full Name" : name} className="mt-2">{placeholder}</ label>
        <input
          value={value || ''}
          name={(name)}
          onChange={handleInputChange}
          type={input}
          placeholder={placeholder}
          className="form-control mt-2"
        />
      </>
    )
  }
}

export default FormElement
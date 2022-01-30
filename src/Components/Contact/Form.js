import React, { useEffect, useState } from 'react';
import FormElement from './FormElement'
import { validateEmail } from './utils/helpers';

export default function Form() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
      errorMessage: "*Required: Please enter a name",
      required: true,
      pattern: `\w+`
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "*Required: Please enter a valid email",
      required: true
    },
    {
      id: 3,
      name: "message",
      type: "text",
      placeholder: "Leave a short message",
      label: "Leave your message here",
      errorMessage: "*Required: Please leave a message",
      required: true
    }
  ]

  const handleInputChange = (e) => {
    setValues((e) => ({ ...values, [e.target.name]: e.target.value }))
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='container d-flex justify-content-center'>
      <div className='mt-2'>
        <p className="text-danger"></p>
      </div>
      <form className="form col-12 col-lg-6" onSubmit={handleFormSubmit}>
        {inputs.map((input) => (
          <FormElement
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleInputChange}
          />
        ))}
        <button type="button" className="btn btn-primary mt-5">
          Submit
        </button>
      </form>

    </div>
  );
}
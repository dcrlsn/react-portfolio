import React, { useEffect, useState } from 'react';
import FormElement from './FormElement'

export default function Form() {
  const initialValues = {
    username: "",
    email: "",
    message: "",
  }
  const [values, setValues] = useState(initialValues);

  const inputs = [
    {
      id: 1,
      name: "userName",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
      errorMessage: "*Required: Please enter a name",
      required: true,
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
    setValues({ ...initialValues });
  };

  return (
    <div className='container d-flex justify-content-center'>
      <div className='mt-2'>
        <p className="text-danger"></p>
      </div>
      <form className="form col-12 col-lg-6">
        {inputs.map((input) => (
          <FormElement
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleInputChange}
          />
        ))}
        <button className="btn btn-primary mt-5" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

    </div>
  );
}
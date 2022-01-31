import React, { useEffect, useState } from 'react';
import FormElement from './FormElement'
import { Container, Button } from 'react-bootstrap';

const initialValues = {
  userName: "",
  email: "",
  message: "",
}
export default function Form() {
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
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    setValues(initialValues)
  };

  return (
    <Container className='d-flex justify-content-center'>
      <form className="form col-12 col-lg-6" onSubmit={handleFormSubmit} >
        {
          inputs.map((input) => (
            <FormElement
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleInputChange}
            />
          ))
        }
        <Button className="mt-5">
          Submit
        </Button>
      </form>
    </Container>
  );
}
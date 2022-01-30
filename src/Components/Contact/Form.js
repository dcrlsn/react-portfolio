import React, { useEffect, useState } from 'react';
import FormElement from './FormElement'

import { validateEmail } from './utils/helpers';

export default function Form() {
  const [form, setForm] = useState({});
  const { email, userName, message } = form
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }))
  };

  useEffect(() => {
    if (email && !validateEmail(email)) setErrorMessage("Please Enter a valid email")
    else setErrorMessage("")
  }, [form])

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      return;
    }
    setForm({});
  };

  return (
    <div className='container d-flex justify-content-center'>
      <div className='mt-2'>
        <p className="text-danger">{errorMessage}</p>
      </div>
      <form className="form col-12 col-lg-6">
        <FormElement
          value={email}
          name={"email"}
          handleInputChange={handleInputChange} />
        <FormElement
          value={userName}
          name={"userName"}
          handleInputChange={handleInputChange} />
        <FormElement
          value={message}
          name={"message"}
          handleInputChange={handleInputChange} />
        <button type="button" className="btn btn-primary mt-5" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>

    </div>
  );
}
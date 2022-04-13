import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import '../styles/contact.scss';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section className="contact-container">
      <form onSubmit={handleSubmit} className="form">
        <h1>Let's Chat!</h1>

        <div className="contact-input">
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
            className="input-field"
            placeholder="Name"
          />{' '}
        </div>
        <div className="contact-input">
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
            className="input-field"
            placeholder="Email"
          />{' '}
        </div>
        <div className="contact-input">
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="10"
            className="input-field"
            placeholder="Message"
          />{' '}
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;

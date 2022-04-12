import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

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
    <section id="contact">
      <h1>Let's Chat!</h1>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            as={Row}
            className="mb-3 contact-input"
            controlId="formHorizontalEmail"
          >
            <Form.Label column sm={2} htmlFor="name">
              Name:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                defaultValue={name}
                onBlur={handleChange}
                name="name"
                className="input-field"
              />{' '}
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3 contact-input"
            controlId="formHorizontalEmail"
          >
            <Form.Label column sm={2} htmlFor="email">
              Email address:
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                defaultValue={email}
                onBlur={handleChange}
                name="email"
                className="input-field"
              />{' '}
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3 contact-input"
            controlId="formHorizontalEmail"
          >
            <Form.Label column sm={2} htmlFor="message">
              Message:
            </Form.Label>
            <Col sm={10}>
              <textarea
                name="message"
                defaultValue={message}
                onBlur={handleChange}
                rows="7"
                className="input-field form-control"
              />{' '}
            </Col>
          </Form.Group>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;

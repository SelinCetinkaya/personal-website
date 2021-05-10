import React, { useState } from "react";
import "./ContactMe.css";
import { Form, Input, Button } from "antd";
import emailjs from "emailjs-com";

function ContactMe(props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_syvxd1s",
        "contact_form",
        "#contact-form",
        "user_AmV3VaW0jjXKh3fiQTfim"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(email, message);
  };

  return (
    <div className="contact-me">
      <p id="contact-me-title">Contact Me</p>
      <hr id="contact-me-break" />
      <p id="contact-me-intro">
        I am currently looking for new opportunities! Please send me a message
        if you would like to get in touch.
      </p>
      <Form id="contact-form">
        <Form.Item
          rules={[
            { required: true, message: "Please input your email address!" },
          ]}
          label="Email address:"
          name="email"
        >
          <Input name="user_email" onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item name="message" label="Message:">
          <Input.TextArea
            id="contact-me-message-input"
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
        </Form.Item>
        <Button onClick={handleSubmit} type="primary" htmltype="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactMe;

import React, { useState } from "react";
import "./ContactMe.css";
import { Form, Input, Button, Modal, Space } from "antd";
import emailjs from "emailjs-com";
import { USER_ID, TEMPLATE_ID, SERVICE_ID } from "../../services";

function ContactMe(props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function success() {
    Modal.success({
      content: "You're message has been sent!",
    });
  }

  function error() {
    Modal.error({
      title: "Something went wrong!",
      content:
        "Please try again later or reach out to me directly via my email address (listed on my resume)",
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", USER_ID).then(
      (result) => {
        console.log(result.text);
        success();
      },
      (error) => {
        console.log(error.text);
        error();
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

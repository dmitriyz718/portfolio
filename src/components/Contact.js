import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import { Nav } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";

class Contact extends Component {
  state = {
    modal: false,
    user_name: "",
    user_email: "",
    message: "",
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendEmail = (e) => {
    e.preventDefault();

    console.log(e.target);
    emailjs
      .sendForm(
        "default_service",
        "template_tLS3GcAw",
        e.target,
        "user_pLPEf1QG3EWeBcDrZzeD9"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent");
        },
        (error) => {
          console.log(error.text);
          alert(
            "Unable to sent email, please make sure you filled every out out and did the captcha."
          );
        }
      );
    this.toggle();
  };
  render() {
    return (
      <Fragment>
        <Nav.Link onClick={this.toggle} id="contactme">
          Contact Me
        </Nav.Link>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Send me an Email.</ModalHeader>
          <ModalBody>
            <Form className="form" onSubmit={this.sendEmail}>
              <FormGroup>
                <Input type="hidden" name="contact_number" />
                <Label for="user_name">
                  <strong>Your Name</strong>
                </Label>
                <Input
                  type="text"
                  name="user_name"
                  id="user_name"
                  onChange={this.onChange}
                ></Input>
                <Label for="user_name">
                  <strong>Your Email</strong>
                </Label>
                <Input
                  type="email"
                  name="user_email"
                  id="user_email"
                  onChange={this.onChange}
                ></Input>
                <Label for="message">
                  <strong>Message</strong>
                </Label>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  onChange={this.onChange}
                ></Input>
                <ReCAPTCHA
                  sitekey="6LeXJMkZAAAAADNiELSb7rZkUnajims97abOh7tV"
                  style={{ marginTop: "2rem" }}
                />
                <Button
                  type="submit"
                  className="contact-form"
                  color="info"
                  value="Send"
                  style={{ marginTop: "2rem" }}
                >
                  Send Email
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>

        {/*         <form className="contact-form" onSubmit={this.sendEmail}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form> */}
      </Fragment>
    );
  }
}
export default Contact;

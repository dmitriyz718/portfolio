import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Navbar
        className="justify-content-center"
        sticky="bottom"
        expand="lg"
        bg="secondary"
        variant="dark"
      >
        <Navbar.Brand className="justify-content-right" href="#home">
          &copy; 2020 Dmitriy Zagoruyko
        </Navbar.Brand>
      </Navbar>
    );
  }
}
export default Footer;

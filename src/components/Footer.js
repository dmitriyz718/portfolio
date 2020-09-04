import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export default class Footer extends Component {
  render() {
    return (
      <Navbar fixed="bottom" expand="lg" bg="secondary" variant="dark">
        <Navbar.Brand href="#home">&copy; 2020 Dmitriy Zagoruyko</Navbar.Brand>

        <Navbar.Text className="justify-content-end">Contact Me</Navbar.Text>
      </Navbar>
    );
  }
}

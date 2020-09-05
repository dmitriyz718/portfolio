import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="#0A3537"
        variant="dark"
      >
        <Navbar.Brand href="#home">Dmitriy Zagoruyko</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link target="_blank" href="https://github.com/dmitriyz718">
              Github
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              target="_blank"
              href="https://www.linkedin.com/in/dmitriyzag/"
            >
              LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Header;

import React, { Component } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Navbar.Brand href="#home">Dmitriy Zagoruyko</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">About Me</Nav.Link>
            <Nav.Link href="#pricing">Portfolio</Nav.Link>
            <NavDropdown
              title="Contact and Resume"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                View Resume
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contact Me</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Skill set</NavDropdown.Item>
            </NavDropdown>
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

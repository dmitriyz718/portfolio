import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Contact from "./Contact";
class Header extends Component {
  render() {
    return (
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="#0A3537"
        variant="dark"
        id="navbar"
      >
        <Navbar.Brand href="#home">Dmitriy Zagoruyko</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about" style={{ fontWeight: "bold" }}>
              About Me
            </Nav.Link>
            <Nav.Link href="#portfolio" style={{ fontWeight: "bold" }}>
              Projects
            </Nav.Link>
            <Nav.Link href="#resume" style={{ fontWeight: "bold" }}>
              Resume
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              target="_blank"
              style={{ fontWeight: "bold" }}
              href="https://github.com/dmitriyz718"
            >
              Github
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              target="_blank"
              style={{ fontWeight: "bold" }}
              href="https://www.linkedin.com/in/dmitriyzag/"
            >
              LinkedIn
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Contact />
      </Navbar>
    );
  }
}
export default Header;

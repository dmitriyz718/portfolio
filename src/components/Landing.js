import React, { Component } from "react";
import { Jumbotron, Container, Image, Row, Col } from "react-bootstrap";
import profilepic from "../profilepic.png";
class Landing extends Component {
  render() {
    return (
      <Jumbotron fluid style={{ background: "none" }}>
        <Container>
          <h2>Full Stack Software Engineer</h2>
          <Row xs="auto">
            <Col>
              <Image src={profilepic} height="171" />
            </Col>
            <Col>
              <h4>Full stack engineer with experience in:</h4>
            </Col>
            <Col>
              <ul>
                <li>Javascript, Node.JS, Express</li>
                <li>React, Redux</li>
                <li>SQL - MySQL, PostgreSQL, SQLite</li>
              </ul>
            </Col>
            <ul>
              <li>MongoDB, Mongoose</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Python, Django, Flask</li>
            </ul>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}
export default Landing;

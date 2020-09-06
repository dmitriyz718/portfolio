import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    return (
      <Card className="text-center" id="projects">
        <Card.Header>
          <h2>Current Portfolio Projects</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>Masons Beef</Card.Title>
          <Card.Text>
            <p>
              This is a two part project, a server side serving up API using
              Node.JS as well as Mongoose, Express, and MongoDB
            </p>
            <p>
              The Front end is utilizing React JS, as well as React-Bootstrap
              and several other technologies
            </p>
            <p>
              The project is being designed for real life use for a family ran
              business in Texas. Project links and readme's are currently
              available on my Github
            </p>
          </Card.Text>
          <Button variant="primary">
            <a
              style={{ color: "whitesmoke" }}
              href="https://github.com/dmitriyz718/masonsbeef-server"
            >
              See Project On Github
            </a>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Status: In progress, contributions are welcome.
        </Card.Footer>
      </Card>
    );
  }
}
export default Portfolio;

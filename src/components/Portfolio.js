import React, { Component, Fragment } from "react";
import { Card, Button } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <Card.Header className="text-center" id="portfolio">
          <h2>Current Portfolio Projects</h2>
          <h4>
            For a full list of my current projects please visit my Github.
          </h4>
        </Card.Header>
        <Card className="text-center m-4" id="projects" border="primary">
          <Card.Body>
            <Card.Title>Masons Beef</Card.Title>
            <Card.Text>
              <p>
                This is a two part project, a server side serving up API using
                Node.JS as well as Mongoose, Express, and MongoDB.
              </p>
              <p>
                The Front end is utilizing React JS, as well as React-Bootstrap
                and several other technologies.
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
        <Card className="text-center m-4" id="projects" border="primary">
          <Card.Body>
            <Card.Title>Technology Blog</Card.Title>
            <Card.Text>
              <p>
                This is an ongoing Python/Django blog that I am working on,
                currently functional, but as with all my projects I continuously
                improve upon and keep up to date.
              </p>
              <p>
                The project features Django auth, utilizes the Pillow library
                for easy image uploading, and partials for DRY coding.
              </p>
              <p>
                Ultimate goal of the project is to have a full CRUD blog with
                contributors and staff that will help keep fellow engineers up
                to date with all of the latest and greatest in the tech
                industry! Upgrades are being continuously made, and as always,
                contributions are welcome.
              </p>
            </Card.Text>
            <Button variant="primary">
              <a
                style={{ color: "whitesmoke" }}
                href="https://github.com/dmitriyz718/djangoblog"
              >
                See Project On Github
              </a>
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Status: In progress, contributions are welcome.
          </Card.Footer>
        </Card>
      </Fragment>
    );
  }
}
export default Portfolio;

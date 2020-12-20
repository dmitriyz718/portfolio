import React, { Component, Fragment } from "react";
import { Card, Button, Image } from "react-bootstrap";
import informed from "../informed.jpg";
import masonsBeef from "../masonsbeef.jpg";
import djangoBlog from "../djangoblog.jpg";
class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <Card className="text-center m-4" id="projects" border="info">
          <Card.Body>
            <Card.Title>
              <strong>Informed</strong>
            </Card.Title>
            <Image src={informed} fluid />
            <Card.Text>
              <p>
                A political news application utilizing the News API platform to
                gather articles from over 80 different sources and display them
                in one app, eliminating the need to jump from one news platform
                to the other, and giving the user a way to stay informed on all
                the latest news from around the globe.
              </p>
              <p>
                Created with React JS and Redux, keeping in mind application
                states and rendering methods for fast and efficient display.
                Open source and available on my Github.
              </p>
              <p>
                This project was originally designed and created in
                collaboration with a UX/UI design team, and had me and two
                fellow developers on the development side. The project is
                currently in development phase and not live because going live
                would require to purchase the live plan from the News API
                platform, which is costly, however, it gave me the opportunity
                to work with real work third party APIs and demonstrate my
                ability to integrate multiplatform tools.
              </p>
            </Card.Text>
            <Button variant="primary">
              <a
                style={{ color: "whitesmoke" }}
                href="https://github.com/dmitriyz718/politicalawareness"
              >
                See Project On Github
              </a>
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Status: In progress, contributions are welcome.
          </Card.Footer>
        </Card>
        <Card className="text-center m-4" id="projects" border="info">
          <Card.Body>
            <Card.Title>
              <strong>Masons Beef</strong>
            </Card.Title>
            <Image src={masonsBeef} fluid />
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
        <Card className="text-center m-4" id="projects" border="info">
          <Card.Body>
            <Card.Title>
              <strong>Technology Blog</strong>
            </Card.Title>
            <Image src={djangoBlog} fluid />
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

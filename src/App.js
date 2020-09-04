import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Landing from "./components/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <About />
        <Resume />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;

import React from "react";
import Directory from "../components/Directory";
import "./homepagestyle.css";

import { Container } from "react-bootstrap";

const Homepage = () => (
  <Container className="homepage" fluid>
    <Directory  />
  </Container>
);

export default Homepage;

import React from "react";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import "./SignInSignUpPageStyle.css";

import { Container, Row } from "react-bootstrap";

const SignInSignUpPage = () => (
  <Container fluid>
    <Row>
      <SignIn />
      <SignUp />
    </Row>
  </Container>
);

export default SignInSignUpPage;

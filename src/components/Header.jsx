import React from "react";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./HeaderStyle.css";

const Header = () => (
  <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    <Nav className="ml-auto">
      <Nav.Link href="#">{0} CART</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;

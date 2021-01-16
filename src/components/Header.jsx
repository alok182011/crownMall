import React from "react";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { auth } from "../firebase/firebaseUtil";
import { connect } from 'react-redux';


import "./HeaderStyle.css";

const Header = ({ currentUser }) => (
  <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/shop">SHOP</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            CONTACT
          </Nav.Link>
          {currentUser ? (
            <div className="d-flex">
              <Nav.Link active>Hi! {currentUser.currentUser.displayName}</Nav.Link>
              <Nav.Link onClick={() => auth.signOut()}>SIGN OUT</Nav.Link>
            </div>
          ) : (
            <Nav.Link href="/signin">SIGN IN</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
    <Nav className="ml-auto mr-auto">
      <Nav.Link href="#">{0} CART</Nav.Link>
    </Nav>
  </Navbar>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);

import React from "react";
import { ReactComponent as Logo } from "../assets/crown.svg";
import { Navbar, Nav, Container } from "react-bootstrap";
import { auth } from "../firebase/firebaseUtil";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./HeaderStyle.css";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import { selectCartHidden } from "../redux/cart/cart-selectors";
import { selectCurrentUser } from "../redux/user/user-selectors";

const Header = ({ currentUser, hidden }) => (
  <Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
    <Container className="header">
      <Navbar.Brand href="/">
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/shop">SHOP</Nav.Link>
          <Nav.Link eventKey={2} href="/contact">
            CONTACT
          </Nav.Link>
          {currentUser ? (
            <div className="d-flex">
              <Nav.Link active>
                Hi! {currentUser.currentUser.displayName}
              </Nav.Link>
              <Nav.Link onClick={() => auth.signOut()}>SIGN OUT</Nav.Link>
            </div>
          ) : (
            <Nav.Link href="/signin">SIGN IN</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Container>
    <Nav className="ml-auto mr-auto">
      <Nav.Link href="#">
        <CartIcon />
      </Nav.Link>
    </Nav>
    {hidden ? null : <CartDropdown />}
  </Navbar>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

import React from "react";
import { connect } from "react-redux";

import { selectCartItems, selectCartTotal } from "../redux/cart/cart-selectors";
import CheckoutItem from "../components/CheckoutItem";

import "./CheckoutStyle.css";
import { Container } from "react-bootstrap";
import { toggleCartHidden } from "../redux/cart/cart-actions";

const CheckoutPage = ({ cartItems, total }) => (
  <Container fluid>
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Descreption</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block-remove">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL : ${total}</span>
      </div>
    </div>
  </Container>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);

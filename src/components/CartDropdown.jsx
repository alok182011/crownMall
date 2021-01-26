import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./CartDropdownStyle.css";
import CartItem from "./CartItem";
import CustomButton from "./CustomButton";
import { selectCartItems } from "../redux/cart/cart-selectors";
import { toggleCartHidden } from "../redux/cart/cart-actions";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      id="dropdown-button"
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

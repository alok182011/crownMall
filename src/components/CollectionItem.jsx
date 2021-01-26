import React from "react";
import { connect } from "react-redux";

import "./CollectionItemStyle.css";
import { addItem } from "../redux/cart/cart-actions";
import { Col } from "react-bootstrap";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <Col xs={10} md={6} lg={3} className="collection-item mb-4">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <div onClick={() => addItem(item)} className="add-to-cart">
          ADD TO CART
        </div>
      </div>
      <div className="collection-info">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

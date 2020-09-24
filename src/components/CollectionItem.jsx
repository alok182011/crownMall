import React from "react";

import "./CollectionItemStyle.css";
import { Col } from "react-bootstrap";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <Col xs={10} md={6} lg={3} className="collection-item mb-4">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="add-to-cart">ADD TO CART</div>
    </div>
    <div className="collection-info">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </Col>
);

export default CollectionItem;

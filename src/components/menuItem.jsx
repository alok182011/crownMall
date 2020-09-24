import React from "react";
import { withRouter } from "react-router-dom";
import { Col } from "react-bootstrap";

import "./menuItemStyle.css";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <Col xs={10} lg={4} className="col mb-4">
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="content"
      id={`${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div className="info">
        <h1>{title.toUpperCase()}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  </Col>
);

export default withRouter(MenuItem);

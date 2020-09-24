import React from "react";
import CollectoinItem from "./CollectionItem";

import "./CollectionPreviewStyle.css";
import { Row } from "react-bootstrap";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview collection-row m-4">
    <h1 className="title mb-3 text-center">{title.toUpperCase()}</h1>
    <Row className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectoinItem
            key={item.id}
            name={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
          />
        ))}
    </Row>
  </div>
);

export default CollectionPreview;

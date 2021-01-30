import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../components/CollectionItem";

import { selectShopCollection } from "../redux/shop/shop-selectors";

import "./CollectionPageStyle.css";
import { Row } from "react-bootstrap";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <Row className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Row>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

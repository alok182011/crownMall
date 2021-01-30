import React from "react";
import { connect } from "react-redux";

import "./CollectionsOverviewStyle.css";

import CollectionPreview from "./CollectionPreview";
import { selectShopCollections } from "../redux/shop/shop-selectors";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collections: selectShopCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);

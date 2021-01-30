import React from "react";
import { Route } from "react-router-dom";

import CollectionPage from "./CollectionPage";
import CollectionsOverview from "../components/CollectionsOverview";
import "./shopStyle.css";
import { Container } from "react-bootstrap";

const ShopPage = ({ match }) => {
  console.log(match);
  return (
    <Container className="shop-page" fluid>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </Container>
  );
};

export default ShopPage;

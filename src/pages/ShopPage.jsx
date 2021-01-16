import React from "react";
import SHOP_DATA from "./shopData";

import CollectionPreview from "../components/CollectionPreview";
import "./shopStyle.css";
import { Container } from "react-bootstrap";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <Container fluid>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </Container>
    );
  }
}

export default ShopPage;

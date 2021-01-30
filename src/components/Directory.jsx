import React from "react";
import { connect } from "react-redux";

import { Row } from "react-bootstrap";

import { selectDirectorySections } from "../redux/directory/directory-selectors";
import MenuItem from "./MenuItem";

import "./directoryStyle.css";

const Directory = ({ sections }) => (
  <Row className="d-row my-4">
    {sections.map(({ title, imageUrl, id, size, linkUrl }) => (
      <MenuItem
        title={title}
        key={id}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ))}
  </Row>
);

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});

export default connect(mapStateToProps)(Directory);

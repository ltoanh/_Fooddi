import React from "react";
import PropTypes from "prop-types";
import './productTag.css';

function ProductTag(props) {
  const { productTag } = props;

  return <div className="product-block-tag">
    {productTag}
  </div>;
}

ProductTag.propTypes = {
  tag: PropTypes.string,
};

export default ProductTag;

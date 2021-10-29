import React from "react";
import PropTypes from "prop-types";

// style
import "./product.css";
import ProductTag from "./ProductTag/ProductTag";

function Product(props) {
  const { product, productTag } = props;

  const innerRatingStar = (number) => {
    let innerHTML = "";
    let i = 1;
    while (i++ <= number) {
      innerHTML += '<i class="ri-star-fill"></i>';
    }
    return innerHTML;
  };
  return (
    <div className="product-block">
      {
        productTag && <ProductTag productTag={productTag} />
      }
      <img
        className="product-block-image"
        src={product.img}
        alt={product.name}
      />
      <div className="product-block-content">
        <h4 className="product-content-header">{product.name}</h4>
        <p className="product-content-dsc">{product.dsc}</p>
        <p className="product-content-rating"
          dangerouslySetInnerHTML={{ __html: innerRatingStar(product.rate) }}
        ></p>
      </div>
    </div>
  );
}

Product.defaultProps = {
  productTag: null,
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dsc: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
  productTag: PropTypes.string,
};
export default Product;

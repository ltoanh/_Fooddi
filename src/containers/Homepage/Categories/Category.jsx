import React from "react";

function Category({ imgSrc, name }) {
  return (
    <div className="category-item">
      <img src={imgSrc} alt="" />
      <p className="category-item-name">{name}</p>
      <i className="category-more-icon ri-arrow-right-s-line"></i>
    </div>
  );
}

export default Category;

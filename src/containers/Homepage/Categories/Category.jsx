import React from 'react';

function Category({imgSrc, title}) {
  return (
    <div className="category-item">
      <img src={imgSrc} alt="" />
      <p className="category-item-title">{title}</p>
    </div>
  );
}

export default Category;
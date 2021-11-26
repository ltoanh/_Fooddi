import React, { Suspense, useEffect, useState } from "react";
// ================== style =========================
import "./categories.css";

//===================== component ========================
// import Category from "./Category";
import fooddiApi from "api-config/fooddiApi";

// React.lazy()
const Category = React.lazy(() => import("./Category"));

function Categories() {
  const [listCategory, setListCategory] = useState([]);

  // fetch categories
  useEffect(() => {
    const fetchCategoriesList = async () => {
      let response = await fooddiApi.getCategoriesList();
      setListCategory(response);
    };

    fetchCategoriesList();
  }, []);

  return (
    <section className="container">
      <div className="categories-slider">
        <p className="small-title">Categories</p>
        <h2 className="title">What we have?</h2>
        <div className="categories">
          <Suspense fallback={<div>Loading...</div>}>
            {listCategory &&
              listCategory.map((category, id) => (
                <Category
                  imgSrc={category.img_src}
                  key={id}
                  name={category.name}
                />
              ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default Categories;

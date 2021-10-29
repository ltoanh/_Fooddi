import React, { useEffect, useState } from "react";
//=================== style========================
// slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./bestseller.css";
// ========= api ===================
import fooddiApi, { TYPE as fooddiType } from "../../../api-config/fooddiApi";
import Product from "../../../components/Product/Product";

function BestSeller() {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);

  // get best seller products by api
  useEffect(() => {
    const fetchProductsList = async () => {
      try {
        let params = {
          _limit: 5,
        };
        let response = await fooddiApi.getByType(
          fooddiType["best-foods"],
          params
        );
        setBestSellerProducts(response);
        console.log(response);
      } catch (err) {
        console.log("failed ", err);
      }
    };
    fetchProductsList();
  }, []);

  const displayProductList = bestSellerProducts.map((product) => (
    <Product key={product.id} productTag="Best Seller" product={product} />
  ));

  // slick slider
  const settingsSlider = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    // custom dot
    dots: true,
    dotsClass: 'slick-dot-custom',
    // auto speed
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease",
  };

  return (
    <section className="container best-seller">
      <p className="small-title">Best seller</p>
      <h2 className="title">What's the most popular?</h2>
      <Slider {...settingsSlider} className="list-products">
        {displayProductList}
      </Slider>
    </section>
  );
}

export default BestSeller;

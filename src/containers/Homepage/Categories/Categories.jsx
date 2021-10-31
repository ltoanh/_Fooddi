import React from "react";
// ================== style =========================
import "./categories.css";
import breadImg from "assets/icon/bread.png";
import drinkImg from "assets/icon/drink.png";
import hamburgerImg from "assets/icon/hamburger.png";
import pizzaImg from "assets/icon/pizza.png";
import sandwichImg from "assets/icon/sandwich.png";
// carousel
import Carousel from 'react-elastic-carousel';

//===================== component ========================
import Category from "./Category";

// const
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
];

function Categories() {
  const listCategory = [
    { img: breadImg, title: "Bread" },
    { img: hamburgerImg, title: "Hamburger" },
    { img: sandwichImg, title: "Sandwich" },
    { img: pizzaImg, title: "Pizza" },
    { img: drinkImg, title: "Drink" },
  ];

  return (
    <section className="container">
      <div className="categories-slider">
        <p className="small-title">Categories</p>
        <h2 className="title">What we have?</h2>
        <Carousel className="categories" breakPoints={breakPoints}>
          {listCategory.map((category, id) => (
            <Category imgSrc={category.img} key={id} title={category.title} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Categories;

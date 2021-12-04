import React, { useEffect } from "react";
//========================== library ======================
import $ from "jquery";

// =========================== style ======================
import "./header.css";
import slideImage1 from "assets/banner/banner1.jpg";
import slideImage2 from "assets/banner/banner2.jpg";
import slideImage3 from "assets/banner/banner3.jpg";
import {gsap, Power1} from 'gsap';

// ================ GSAP ==========================
function Header() {
  //==================== GSAP ======================
  useEffect(() => {
    gsap.timeline()
    .add()
    .from('#header-content--title', {
      y: 30, 
      opacity: 0,
      ease: Power1.easeInOut,
      delay: 0.3
    })
    .from('#header-content--description', {
      y: 10, 
      opacity: 0,
      ease: Power1.easeInOut,
    })
    .from('#header-content--description+.btn',{
      y: 10, 
      opacity: 0,
      ease: Power1.easeInOut,
    })
  }, []);


  //=========== active bg image ======================
  useEffect(() => {
    let btnList = document.querySelectorAll(".slider-btn");
    let sliders = document.querySelectorAll(".sliderImage");

    let activeSlider = (curr) => {
      $(".sliderImage").removeClass("active");
      $(".slider-btn").removeClass("active");

      btnList[curr].classList.add("active");
      sliders[curr].classList.add("active");
    };

    btnList.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        activeSlider(i);
      });
    });

  }, []);

  return (
    <section id="header">
      <div className="container">
        <div id="header-content">
          <h1 id="header-content--title">
            Are you <span>hungry?</span> Fooddi now!
          </h1>
          <p id="header-content--description">
            You can order here very easy and simple
          </p>
          <button className="btn-linear btn">Order now</button>
        </div>
        <div id="header-slider">
          <img
            src={slideImage1}
            className="sliderImage image-1 active"
            alt=""
          />
          <img src={slideImage2} className="sliderImage image-2 " alt="" />
          <img src={slideImage3} className="sliderImage image-3 " alt="" />
        </div>
        <div id="slider-navigation">
          <button className="slider-btn slider-1 active"></button>
          <button className="slider-btn slider-2"></button>
          <button className="slider-btn slider-3"></button>
        </div>
      </div>
    </section>
  );
}

export default Header;

/**
 * tao slide, load image = js
 */

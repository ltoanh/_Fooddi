import React, { useEffect, useRef } from "react";
//====================== style =======================
import "./ordernow.css";
import img1 from "assets/delivery/step-1.jpeg";
import img2 from "assets/delivery/step-2.jpeg";
import img3 from "assets/delivery/step-3.jpeg";
import img4 from "assets/delivery/step-4.jpeg";
import arrow1 from "assets/icon/arrow-1.png";
import arrow2 from "assets/icon/arrow-2.png";
import arrow3 from "assets/icon/arrow-3.png";

// =============== GSAP ====================
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function OrderNow() {
  // GSAP
  useEffect(() => {
    gsap
      .timeline()
      .add()
      .from("#step-1", {
        y: "100",
        opacity: 0,
        ease: "ease-in",
        scrollTrigger: {
          trigger: "#step-1",
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      })
      .from("#step-2", {
        duration: 0.5,
        y: 100,
        x: "-100",
        opacity: 0,
        ease: "ease-in",
        scrollTrigger: {
          trigger: "#step-2",
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      })
      .from("#step-3", {
        duration: 0.5,
        x: "-200",
        y: 100,
        opacity: 0,
        ease: "ease-in",
        scrollTrigger: {
          trigger: "#step-3",
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      })
      .from("#step-4", {
        duration: 0.5,
        x: "-300",
        y: 100,
        opacity: 0,
        ease: "ease-in",
        scrollTrigger: {
          trigger: "#step-4",
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
        },
      });
  }, []);

  return (
    <section className="container order-now">
      <p className="small-title">Order Now</p>
      <h2 className="title">How we work?</h2>
      <div className="deliver">
        <div id="step-1" className="deliver-step">
          <img
            className="deliver-step-img"
            src={img1}
            alt="choose your favorite"
          />
          <p className="deliver-step-description">Choose your favorite</p>
        </div>
        <div id="step-2" className="deliver-step">
          <img className="deliver-arrow" src={arrow1} alt="" />
          <img className="deliver-step-img" src={img2} alt="We deliver" />
          <p className="deliver-step-description"> We deliver</p>
        </div>
        <div id="step-3" className="deliver-step">
          <img className="deliver-arrow" src={arrow2} alt="" />
          <img className="deliver-step-img" src={img3} alt="Cash on deliver " />
          <p className="deliver-step-description">Cash on deliver </p>
        </div>
        <div id="step-4" className="deliver-step">
          <img className="deliver-arrow" src={arrow3} alt="" />
          <img className="deliver-step-img" src={img4} alt="Eat and Enjoy" />
          <p className="deliver-step-description">Eat and Enjoy</p>
        </div>
      </div>
    </section>
  );
}

export default OrderNow;

import React from "react";
//====================== style =======================
import "./ordernow.css";
import img1 from "assets/delivery/step-1.jpeg";
import img2 from "assets/delivery/step-2.jpeg";
import img3 from "assets/delivery/step-3.jpeg";
import img4 from "assets/delivery/step-4.jpeg";
import arrow1 from "assets/icon/arrow-1.png";
import arrow2 from "assets/icon/arrow-2.png";
import arrow3 from "assets/icon/arrow-3.png";

function OrderNow() {
  return (
    <section className="container order-now">
      <p className="small-title">Order Now</p>
      <h2 className="title">How we work?</h2>
      <div className="deliver">
        <div className="deliver-step">
          <img
            className="deliver-step-img"
            src={img1}
            alt="choose your favorite"
          />
          <p className="deliver-step-description">Choose your favorite</p>
        </div>
        <div className="deliver-step">
          <img className="deliver-arrow" src={arrow1} alt="" />
          <img className="deliver-step-img" src={img2} alt="We deliver" />
          <p className="deliver-step-description"> We deliver</p>
        </div>
        <div className="deliver-step">
          <img className="deliver-arrow" src={arrow2} alt="" />
          <img className="deliver-step-img" src={img3} alt="Cash on deliver " />
          <p className="deliver-step-description">Cash on deliver </p>
        </div>
        <div className="deliver-step">
          <img className="deliver-arrow" src={arrow3} alt="" />
          <img className="deliver-step-img" src={img4} alt="Eat and Enjoy" />
          <p className="deliver-step-description">Eat and Enjoy</p>
        </div>
      </div>
    </section>
  );
}

export default OrderNow;

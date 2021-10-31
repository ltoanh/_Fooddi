import React from "react";
import Rating from "./Rating/Rating";
import "./ratingList.css";
//=========== mook ================
import per1 from "assets/per1.jpg";
import per2 from "assets/per2.jpg";
import per3 from "assets/per3.jpg";
import per4 from "assets/per4.jpg";

function RatingList() {
  return (
    <section className="bg-wrapper" id="rating-list">
      <div className="container">
        <p className="small-title">Rating</p>
        <h2 className="title">Recent Rating</h2>
        <div className="rating-list">
          <Rating name="Astro Peter" avatarUrl={per1} rate="3" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          <Rating name="Chef Francis Mallmann" avatarUrl={per2} rate="4" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. s, leo purus sed mauris integer auctor. Hendrerit ridiculus " />
          <Rating name="Astro Peter" avatarUrl={per3} rate="5" comment="dolor sit amet, consectetur adipiscing elit. s, leo purus sed mauris integer auctor. Hendrerit ridiculus" />
          <Rating name="Astro Peter" avatarUrl={per4} rate="3" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        </div>
      </div>
    </section>
  );
}

export default RatingList;

import React from "react";

DeliveryItem.defaultProps = {
  name: "",
  imgSrc: "",
  phoneNumber: "",
  satisfied: 0,
  unsatisfied: 0,
};

function DeliveryItem({ name, imgSrc, phoneNumber, satisfied, unsatisfied }) {
  return (
    <div className="delivery-item">
      <img src={imgSrc} alt={name} />
      <div className="delivery-item__content">
        <h5 className="delivery-item__content--name">{name}</h5>
        <p className="delivery-item__content--des">{phoneNumber}</p>
      </div>
      <div className="delivery-item__rate">
        <div className="delivery-item__rate-child">
          <i className="ri-emotion-happy-fill"></i> <span>{satisfied}</span>
        </div>
        <div className="delivery-item__rate-child">
          <i className="ri-emotion-unhappy-fill"></i> <span>{unsatisfied}</span>
        </div>
      </div>
    </div>
  );
}

export default DeliveryItem;

import React from "react";
import PropTypes from "prop-types";
import './rating.css';

Rating.propTypes = {
  avatarUrl: PropTypes.string,
  name: PropTypes.string,
  rate: PropTypes.number,
  comment: PropTypes.string,
};

Rating.defaultProps = {
  avatarUrl: "",
  name: "",
  rate: 1,
  comment: "",
};

function Rating(props) {
  const { avatarUrl, name, rate, comment } = props;

  const innerRatingStar = (number) => {
    let innerHTML = "";
    let i = 1;
    while (i++ <= number) {
      innerHTML += '<i class="ri-star-fill"></i>';
    }
    return innerHTML;
  };

  return (
    <div className="rating-customer">
      <div className="rating-left">
        <img className="customer-rating-avatar" src={avatarUrl} alt={name} />
      </div>
      <div className="rating-right">
        <p
          className="customer-rating-star"
          dangerouslySetInnerHTML={{ __html: innerRatingStar(rate) }}
        ></p>
        <h4 className="customer-rating-name">{name}</h4>
        <p className="customer-rating-comment">{comment}</p>
      </div>
    </div>
  );
}

export default Rating;

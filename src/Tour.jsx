import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, deleteTour }) => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} className="img" alt="" />
      <span className="tour-price">{price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {seeMore ? info : `${info.substring(0, 250)}...`}

          <button
            className="info-btn"
            onClick={() => {
              setSeeMore(!seeMore);
            }}
          >
            {seeMore ? `show less` : `show more`}
          </button>
        </p>
        <button
          onClick={() => {
            deleteTour(id);
          }}
          className="btn"
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;

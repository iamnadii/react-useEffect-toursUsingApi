import React, { useState } from "react";

const Tour = (props) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="single-tour">
      <img src={props.image} alt="" />
      <div className="bottom">
        <div className="tour-info">
          <h4>{props.name}</h4>
          <h4 className="tour-price">${props.price}</h4>
        </div>
        <p>
          {readMore ? props.info : `${props.info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? `Show Less` : `Show More`}
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => props.filterTours(props.id)}
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;

import React, {useState } from "react";
import tours from "./tours";

const DisplayTours = ({ id, title, image, price, text }) => {
  const [readMore, setReadMore] = useState(false);
  const [tour, setTour] = useState(tours);
  const removeTour = (id) => {
    const newTour = tours.filter((item) => item.id !== id);
    setTour(newTour);
    console.log(newTour);
  };
  return (
    <article className="my-4 box">
      <img src={image} alt={title} className="rounded-top" />
      <div className="m-3">
        <div className="d-flex justify-content-between my-3">
          <h5>{title} </h5>
          <h6 className="price">$ {price} </h6>
        </div>
        <p>
          {readMore ? text : `${text.substring(0, 200)}...  `}
          <button
            className="btn btn-light"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button
          className="btn btn-secondary mb-4 text-capitalize"
          onClick={() => removeTour(id)}>
          not interested
        </button>
      </div>
    </article>
  );
};

export default DisplayTours;

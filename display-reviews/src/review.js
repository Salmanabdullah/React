import React, { useState } from "react";
import reviews from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { author, job, image, info } = reviews[index];
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };
  return (
    <article>
      <div>
        <img src={image} alt={author} />
        <span>
          <FaQuoteRight />
        </span>
      </div>
      <h4>{author} </h4>
      <p>{job} </p>
      <p>{info} </p>
      <div>
        <button onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button>
          <FaChevronRight onClick={nextPerson} />
        </button>
      </div>
      <button onClick={randomPerson}>surprise me</button>
    </article>
  );
};

export default Review;

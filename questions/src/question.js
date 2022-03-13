import React, { useState } from "react";
//import icons from react-icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// on click the answers will be visible means showInfo needs to be true
// then the button will change based on showInfo
// text will be displayed togather with the button
const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <div className=" d-flex justify-content-between mx-4" >
        <h4>{title} </h4>
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="rounded-circle pb-1 text-danger"
        >
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p className="mx-4 fs-5">{info}</p>}
    </article>
  );
};

export default SingleQuestion;

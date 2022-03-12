import React, { useState } from "react";
//import icons from react-icons
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
// on click the answers will be visible means showInfo needs to be true
// then the button will change based on showInfo
// text will be displayed togather with the button
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article>
      <h4>{title} </h4>
      <button onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;

import React from "react";
import questions from "./data";
import SingleQuestion from "./question";
import "./index.css";

function App() {
  return (
    <div className="d-flex justify-content-between text-capitalize box">
      <div className="p-2">
        <h3 className="mt-5 py-5 px-1">questions and answers about login</h3>
      </div>
      <div className="w-100">
        <section>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;

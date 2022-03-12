import React from "react";
import questions from "./data";
import SingleQuestion from "./question"

function App() {
  return (
    <div>
      <h3>questions and answers about login</h3>
      <section>
        {questions.map((question) => {
          return(
            <SingleQuestion key={question.id} {...question} />
          )
        })}
      </section>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { persons } from "./data";

function App() {
  const [person, setPerson] = useState(persons);

  return (
    <main className="block">
      <section className="container">
        <h3>{person.length} birthday reminder</h3>
        {person.map((eachPerson) => {
          const { id, name, age, img } = eachPerson;
          return (
            <article className="person">
              <img src={img} alt="" />
              <div key={id}>
                <h4>{name}</h4>
                <p>{age} years old</p>
              </div>
            </article>
          );
        })}
        {/* passing an empty array to clear the list */}
        <button className="btn" onClick={() => setPerson([])}>
          clear list
        </button>
      </section>
    </main>
  );
}
export default App;

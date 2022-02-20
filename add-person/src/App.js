import React, { useState } from "react";

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const person = { id: new Date().getTime().toString(), userName, email };
    if (userName && email) {
      setPeople((people) => {
        return [...people, person];
      });
      setUserName("");
      setEmail("");
      console.log("sdklfjsdkf");
    } else {
      alert("Please provide necessary informations");
    }
  };
  return (
    <>
      <article className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="userName">Name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((item) => {
          const { id, userName, email } = item;
          return (
            <div className="item" key={id}>
              <h4>{userName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
}

export default App;

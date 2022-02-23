import React, { useState } from "react";

function App() {
  // const [name,setName]=useState('')
  // const [email,setEmail]=useState('')
  const [person, setPerson] = useState({
    userName: "",
    email: "",
    dateOfBirth: "",
  });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.userName && person.email && person.dateOfBirth) {
      const newPerson = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPerson]);
      setPerson({
        userName: "",
        email: "",
        dateOfBirth: "",
      });
    } else {
      alert("Please fill up the form");
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
              value={person.userName}
              //any change to the input area
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="dateOfBirth">Date of Birth:</label>
            <input
              type="text"
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="yyyy-mm-dd"
              value={person.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {/* mapping through the people array and display item on the window */}
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

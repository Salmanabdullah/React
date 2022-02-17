import React, { useEffect, useState } from "react";
import { config } from "./config";

//api to get json data
const url = config.MY_API_URL;

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h1>github users</h1>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <>
              <li key={id}>
                <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>profile</a>
              </div>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;

// create a folder
// 1.open cmd
// 2. create react app
// 3. create a new react <react project>
// 4. npm install -g create-react-app

// Alt
// 1. create a folder
// 2. open it any code editor
// 3. npm install
// 4. npm start

import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    // console.log("before");
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUsers(jsonresponse);
  };

  return (
    <div class="App">
      <h1>hello i'm harsh</h1>
      <button onClick={loadUsers}>Get Data</button>

      <h2>Users:</h2>
      <ul>
        {users.map(({ id, login, avatar_url }) => (
          <li key={id}>
            Name: {login} Avator: {avatar_url}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

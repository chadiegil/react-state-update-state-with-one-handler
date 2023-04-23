import { useState } from "react";

import "./App.css";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const handleChange = (e) => {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(e);
  };

  console.log(inputs);

  return (
    <>
      <h1>Update change in one handler</h1>
      <p>username: {inputs.username}</p>
      <p>email: {inputs.email}</p>
      <p>password: {inputs.password}</p>
      <input
        required
        type="text"
        placeholder="username"
        name="username"
        onChange={handleChange}
      />
      <input
        required
        type="text"
        placeholder="username"
        onChange={handleChange}
        value={inputs.username}
      />
      <input
        required
        type="email"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      <input
        required
        type="password"
        placeholder="password"
        name="password"
        onChange={handleChange}
      />
    </>
  );
}

export default App;

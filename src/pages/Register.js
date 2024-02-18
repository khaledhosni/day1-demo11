import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChange1(params) {
    console.log(params.target.value);
    setUsername(params.target.value);
  }

  function handleChange12(params) {
    setEmail(params.target.value);
  }

  function handleChange3(params) {
    setPassword(params.target.value);
  }

  function handleButton() {
    console.log(username + " " + email + " " + password);
  }
  return (
    <div>
      <input
        value={username}
        type="text"
        placeholder="Username"
        onChange={handleChange1}
      />{" "}
      <br />
      <input
        value={email}
        type="email"
        placeholder="example@example.com"
        onChange={handleChange12}
      />{" "}
      <br />
      <input
        value={password}
        type="password"
        placeholder="*********"
        onChange={handleChange3}
      />{" "}
      <br />
      <button onClick={handleButton}> Register now </button>
    </div>
  );
};

export default Register;

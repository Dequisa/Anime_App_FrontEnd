import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../CSS/Login.css";

export default function Login() {
  let history = useHistory();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const loginConfirmation = async () => {
      try {
        let res = await axios.get("http://localhost:3001/user/user");
        console.log("Checking user login page", res);
        if (res.status === 200 && res.data.username) {
          history.push("/dashboard");
        }
      } catch (err) {
        console.log("Error Returned from loginConfirmation Request:", err);
      }
    };
    loginConfirmation();
  }, [history]);

  const loginUser = async () => {
    try {
      let res = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      });
      console.log("Response from loginUser POST Request:", res);
      if (res.status === 200) {
        console.log("I am running, hear me roar");
        history.push("/dashboard");
      } else {
        // make conditional for each status todo list!
      }
    } catch (err) {
      console.log("Login Fail Error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginUser();
  };
  return (
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username:</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

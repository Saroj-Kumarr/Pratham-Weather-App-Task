import React from "react";
import { app } from "./firebase";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Signin() {
  const [data, setData] = useState({});

  const navigate = useNavigate();


  const auth = getAuth();

  function handleInput(event) {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  }

  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        navigate('/home');
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div>
      <form>
        <div>
          <span className="first">Sign </span>
          <span className="second">in</span>
        </div>

        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          placeholder="email"
          onChange={(event) => {
            handleInput(event);
          }}
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          placeholder="password"
          onChange={(event) => {
            handleInput(event);
          }}
        />
        <br />
        <br />
        <button type="submit" id="button" onClick={handleSubmit}>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Signin;

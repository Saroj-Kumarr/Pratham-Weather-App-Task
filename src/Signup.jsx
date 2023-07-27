import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [data, setData] = useState({});

 const navigate = useNavigate();

  const auth = getAuth();

  function handleInput(event) {
    let newInput = { [event.target.name]: event.target.value };
    setData({ ...data, ...newInput });
  }

  function handleSubmit(e) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        navigate('/login');
      })
      .catch((err) => {
        alert(err.message);
      });
    e.preventDefault();
  }

  return (
    <div>
      <form>
        <div>
          <span className="first">Sign </span>
          <span className="second">up</span>
        </div>

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          placeholder="username"
        />

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
        <div>
          <span>Already have an account ? </span>
          <span className="signup">
            <Link to="/login" className="signin">Sign in</Link>
          </span>
        </div>

        <button type="submit" id="button" onClick={handleSubmit}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;

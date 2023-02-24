import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../App";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length < 6 || password.length < 6) {
      alert('please enter')
    }
    // make a post request to the API with the form data
    // fetch("https://auth-api-c9.web.app/login", {
    fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      // create a new user in the database
      // then...
      .then((res) => res.json())
      .then((response) => {
        // 1. do something with the new user
        setUser(response.user);
        localStorage.setItem('token', response.token)
        // 2. redirect to the content page
        navigate("/secret");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email &nbsp;
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password &nbsp;
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
        <br />
      </form>
      <Link to="/signup" className="App-link">
        Sign Up
      </Link>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../styles/signin.scss";

const SignIn = () => {
  const [cookies, setCookie] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInSuccessful, setSignInSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:5000/api/user/signin", {
        email,
        password,
      });
      setCookie("access_token", JSON.stringify(result.data.token));
      window.localStorage.setItem("user", JSON.stringify(result.data.user));
      setSignInSuccessful(true);
      setTimeout(() => {
        navigate("/selectLang");
      }, 2000);
    } catch (error) {
      console.error(error);
      setErrorMessage("Error signing in. Please check your credentials.");
      // Remove error message after 1 second
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <section className="sign_cls section_padding">
      <div className="form-container">
        <h1>Sign In</h1>

        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Sign In</button>
          {isSignInSuccessful && (
            <div className="success-popup">Sign In Successful!</div>
          )}
          {errorMessage && (
            <div className="error-popup">{errorMessage}</div>
          )}
        </form>
        <p>
          Don't have an account? <span><Link to="/signup">Sign Up</Link></span>
        </p>
      </div>
    </section>
  );
};

export default SignIn;

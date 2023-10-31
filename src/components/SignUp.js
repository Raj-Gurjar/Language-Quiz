import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signin.scss";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUpSuccessful, setSignUpSuccessful] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Email validation using a regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setErrorMessage("Invalid email format");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000); // Remove error message after 1 second
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/user/signup", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        setSignUpSuccessful(true);
        setTimeout(() => {
          navigate("/signin");
        }, 2000);
      }
    } catch (error) {
      console.log(error.message);
      setErrorMessage("Error signing up. Please check your information.");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000); // Remove error message after 1 second
    }
  };

  return (
    <section className="sign_cls section_padding">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Sign Up</button>
          {isSignUpSuccessful && (
            <div className="success-popup">Sign Up Successful! Now login.</div>
          )}
          {errorMessage && (
            <div className="error-popup">{errorMessage}</div>
          )}
        </form>
        <p>
          Already Signed Up? <Link to="/signin"><span>Sign In</span></Link>
        </p>

      </div>
    </section>
  );
};

export default SignUp;

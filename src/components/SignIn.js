import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import "../styles/signin.scss";

const SignIn = () => {
  const [cookies, setCookie] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:5000/api/user/signin", {
        email,
        password,
      });
      setCookie("access_token", JSON.stringify(result.data.token));
      window.localStorage.setItem("user", JSON.stringify(result.data.user));
      navigate("/");
    } catch (error) {
      console.error(error);
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
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </section>
  );
};

export default SignIn;

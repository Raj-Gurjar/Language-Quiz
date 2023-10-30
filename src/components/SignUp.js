import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/signin.scss";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/user/signup", {
        name,
        email,
        password,
      });

      if (res.data.success) {
        navigate("/signin");
        alert("Registration Completed! Now login.");
      }
    } catch (error) {
      console.log(error.message);
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
            placeholder="name"
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
        </form>
        <p>
          Already Signed Up? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;

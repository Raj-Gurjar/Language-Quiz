import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import homeimg from "../media/questioning-concept-with-question-mark (1).jpg";

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const userIsLoggedIn = /* Add your user authentication logic here */ false;

  return (
    <section className="home_cls section_padding">
      <div className="bkg-effect"></div>
      <h1>Welcome to</h1>
      <div className="web-name">
        <div class="wrapper">
          <span>Q</span>
          <span>U</span>
          <span>I</span>
          <span>Z</span>
          <span>L</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>O</span>
        </div>
      </div>

      <h3 className="tag-line">Empowering Language Learners through Quizzes</h3>

      <div className="lan-display">
        <h2>Be Proficient in Any of The Following Languages with Interactive Quizzes</h2>
        <div className="language-options">
          <div>
            <h3>Spanish </h3>
          </div>
          <div>
            <h3>German </h3>
          </div>
          <div>
            <h3>Hindi </h3>
          </div>
          <div>
            <h3>Chinese </h3>
          </div>
        </div>
      </div>

      {userIsLoggedIn ? null : (
        <div className="sign-opt">
          <h3>Please Sign In/Sign Up to move Further
            <div className="sign-links">
              <Link to="/signin" className="si-in">Sign In</Link> / <Link to="/signup" className="si-in">Sign Up</Link>
            </div>
          </h3>
        </div>
      )}
    </section>
  );
};

export default Home;

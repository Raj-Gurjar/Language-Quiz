import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";
import homeimg from "../media/questioning-concept-with-question-mark (1).jpg";

const Home = () => {
  return (
    <section className="home_cls section_padding">
<<<<<<< HEAD
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
=======
      <h1>Welcome to our Language Learning Portal</h1>
      <h2>Select a Language:</h2>
      <div className="language-options">
        <button>
          <Link to="/levels?language=english">English </Link>
        </button>
        <button>
          <Link to="/levels?language=spanish">Spanish </Link>
        </button>
        <button>
          <Link to="/levels?language=german">German </Link>
        </button>
        <button>
          <Link to="/levels?language=hindi">Hindi </Link>
        </button>
>>>>>>> 19cce4dab5154cf8c78c19ef53943a34f1a209b9
      </div>


      <h3 className="tag-line">Empowering Language Learners through Quizzes</h3>

      <div className="lan-display">
        <h2>Be Proficient in Any of The Following Languagues with Interactive Quizes</h2>
        <div className="language-options">
          <div>
            <h3>English </h3>
          </div>
          <div>
            <h3>Spanish </h3>
          </div>
          <div>
            <h3>German </h3>
          </div>
          <div>
            <h3>Hindi </h3>
          </div>
        </div>
      </div>

      <div className="sign-opt">
        <h3>Please Sign In/Sign Up to move Further
          <div className="sign-links">
            <Link to="/signin" className="si-in">Sign In</Link> / <Link to="/signup" className="si-in">Sign Up</Link>
          </div>

        </h3>
      </div>

    </section>
  );
};

export default Home;

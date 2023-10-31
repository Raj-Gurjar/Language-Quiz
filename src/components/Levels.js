import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/levels.scss";

const Levels = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const language = searchParams.get("language");

  return (
    <section className="levels_cls section_padding">
      <h1>Select Your Level</h1>
      <div className="level-options">
        <button className="level-button">
          <Link to={`/quiz?language=${language}&difficulty=easy`}>Easy</Link>
        </button>
        <button className="level-button">
          <Link to={`/quiz?language=${language}&difficulty=medium`}>
            Medium
          </Link>
        </button>
        <button className="level-button">
          <Link to={`/quiz?language=${language}&difficulty=hard`}>Hard</Link>
        </button>
      </div>
    </section>
  );
};

export default Levels;
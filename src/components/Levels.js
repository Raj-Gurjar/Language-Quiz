import React from "react";
import { Link } from "react-router-dom";
import "../styles/levels.scss";

const Levels = () => {
  return (
    <section className="levels_cls section_padding">
      <h1>Select Your Level</h1>
      <div className="level-options">
        <button className="level-button">
          <Link to="/quiz">Level 1</Link>
        </button>
        <button className="level-button">
          <Link to="/quiz">Level 2</Link>
        </button>
        <button className="level-button">
          <Link to="/quiz">Level 3</Link>
        </button>
      </div>
    </section>
  );
};

export default Levels;

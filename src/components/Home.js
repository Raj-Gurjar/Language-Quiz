import React, { useEffect, useState } from "react";
import "../styles/home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home_cls section_padding">
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
      </div>
    </section>
  );
};

export default Home;

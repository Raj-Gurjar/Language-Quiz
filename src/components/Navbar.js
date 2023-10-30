import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "../styles/navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [cookies, setCookie] = useCookies(["access_token"]);

  const handleLogOut = () => {
    setCookie("access_token", JSON.stringify(""));
    window.localStorage.removeItem("user");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <nav>
      <div className="container1">
        <div className="logo">
          <a href="/">Logo</a>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`menu-icon ${menuOpen ? "open" : ""}`}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={currentPath === "/" ? "active" : ""}>
              Home
            </Link>
          </li>

          {cookies.access_token?.length > 0 ? (
            <>
              <li>
                <Link
                  to="/leaderBoard"
                  className={currentPath === "/leaderBoard" ? "active" : ""}
                >
                  LeaderBoard
                </Link>
              </li>
              <li>
                <Link
                  to="/add_que"
                  className={currentPath === "/add_que" ? "active" : ""}
                >
                  Add Questions
                </Link>
              </li>

              <li onClick={handleLogOut}>
                <Link to="/signin">Log Out</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <a
                  href="/signin"
                  className={currentPath === "/signin" ? "active" : ""}
                >
                  SignIn
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className={currentPath === "/signup" ? "active" : ""}
                >
                  SignUp
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

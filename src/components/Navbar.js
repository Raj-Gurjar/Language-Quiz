import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "../styles/navbar.scss";

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
            <a href="/" className={currentPath === "/" ? "active" : ""}>
              Home
            </a>
          </li>

          {cookies.access_token?.length > 0 ? (
            <>
              <li>
                <a
                  href="/leaderBoard"
                  className={currentPath === "/leaderBoard" ? "active" : ""}
                >
                  LeaderBoard
                </a>
              </li>

              <li>
                <a
                  href="/quiz"
                  className={currentPath === "/quiz" ? "active" : ""}
                >
                  Quiz App
                </a>
              </li>
              <li onClick={handleLogOut}>
                <a href="/signin">Log Out</a>
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

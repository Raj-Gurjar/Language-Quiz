import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "../styles/navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [cookies, setCookie] = useCookies(["access_token"]);
  const location = useLocation(); // Get the current location

  const handleLogOut = () => {
    setCookie("access_token", JSON.stringify(""));
    window.localStorage.removeItem("user");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Update currentPath when the location changes
    setCurrentPath(location.pathname);
  }, [location.pathname]); // Listen to changes in location.pathname

  return (
    <nav>
      <div className="container1">
        <div className="logo">
          <Link to="/">QuizLingo</Link>
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
          <li>
            <Link to="/addQue" className={currentPath === "/addQue" ? "active" : ""}>
              Add Questions
            </Link>
          </li>

          {
            cookies.access_token?.length > 0 ? (
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
                    to="/selectLang"
                    className={currentPath === "/selectLang" ? "active" : ""}
                  >
                    Languages
                  </Link>
                </li>

                <li onClick={handleLogOut}>
                  <Link to="/signin">Log Out</Link>
                </li>
              </>
            ) : (
              <>
                {/* <li>
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
                </li> */}
              </>
            )
          }
        </ul >
      </div >
    </nav >
  );
};

export default Navbar;

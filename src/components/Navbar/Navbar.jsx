import React, { useContext, useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";

import AuthContext from "../../context/AuthProvider";
import ServerApi from "../../Axios/ServerApi";

const UserLogoutUrl = "/api/v1/auth/logout";

const Navbar = () => {
  const { userData, logoutUser } = useContext(AuthContext);
  const [exercisesDropdown, setExercisesDropdown] = useState(false);
  const [grammarDropdown, setGrammarDropdown] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const handleExercisesMenu = (e) => {
    e.preventDefault();
    setExercisesDropdown(!exercisesDropdown);
    setGrammarDropdown(false);
  };

  const handleGrammarMenu = (e) => {
    e.preventDefault();
    setGrammarDropdown(!grammarDropdown);
    setExercisesDropdown(false);
  };

  const handleHamburgerMenu = (e) => {
    e.preventDefault();
    setHamburgerActive(!hamburgerActive);
  };

  const closeAllMenus = () => {
    setHamburgerActive(false);
    setExercisesDropdown(false);
    setGrammarDropdown(false);
  };

  const handleLogout = async () => {
    closeAllMenus();
    await logoutUser();
  };

  return (
    <div className="navigation">
      <div className="nav-container">
        <div className="brand">
          <span>EM </span>
          <SchoolIcon style={{ color: "white", fontSize: "35px" }} />
        </div>
        <nav>
          <div className="nav-mobile ">
            <a
              onClick={handleHamburgerMenu}
              id="nav-toggle"
              className={hamburgerActive === true ? "active" : ""}
              href="#!"
            >
              <span></span>
            </a>
          </div>
          <ul
            className={hamburgerActive ? "nav-list" : "nav-list mobile-hidden"}
          >
            <li>
              <Link onClick={closeAllMenus} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={closeAllMenus} to="/translator">
                Translator
              </Link>
            </li>
            <li>
              <a onClick={handleExercisesMenu} href="#!">
                Exercises
              </a>
              <ul
                className={
                  exercisesDropdown === false
                    ? "nav-dropdown hidden"
                    : "nav-dropdown "
                }
              >
                <li>
                  <Link onClick={closeAllMenus} to="/conjugation">
                    Conjugation
                  </Link>
                </li>
                <li>
                  <Link onClick={closeAllMenus} to="/vocabulary">
                    Vocabulary
                  </Link>
                </li>
                <li>
                  <Link onClick={closeAllMenus} to="/reading">
                    Reading
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <a onClick={handleGrammarMenu} href="#!">
                Grammar
              </a>
              <ul
                className={
                  grammarDropdown === false
                    ? "nav-dropdown hidden"
                    : "nav-dropdown "
                }
              >
                <li>
                  <Link onClick={closeAllMenus} to="/past">
                    Past Tense
                  </Link>
                </li>
                <li>
                  <Link onClick={closeAllMenus} to="/future">
                    Future Tense
                  </Link>
                </li>
                <li>
                  <Link onClick={closeAllMenus} to="/subjunctive">
                    The Subjunctive
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              {userData.Username ? (
                <>
                  <li>
                    <Link onClick={closeAllMenus} to="/user">
                      User
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogout} to="/">
                      Log out
                    </Link>
                  </li>
                </>
              ) : (
                <Link onClick={closeAllMenus} to="/login">
                  Log In
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

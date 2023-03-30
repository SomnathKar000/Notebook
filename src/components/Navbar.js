import React from "react";
import { useContext } from "react";
import { useEffect } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import noteContext from "../Context/notes/NoteContext";
const Navbar = () => {
  let location = useLocation();
  useEffect(() => {}, [location]);
  const context = useContext(noteContext);
  const { btn, changeMode } = context;
  let nBtn = btn[0].toUpperCase() + btn.slice(1);
  const history = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    history("/login");
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${btn} bg-${btn}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Notebook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  to="/about"
                >
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch mx-2">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={changeMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {nBtn} mode
              </label>
            </div>
            {!localStorage.getItem("token") ? (
              <form className="d-flex" role="search">
                <Link
                  className="btn btn-primary mx-2"
                  to="/login"
                  role="button"
                >
                  LogIn
                </Link>
                <Link
                  className="btn btn-primary mx-2"
                  to="/signup"
                  role="button"
                >
                  Signup
                </Link>
              </form>
            ) : (
              <button className="btn btn-primary mx-2" onClick={logOut}>
                Sign out
              </button>
            )}
          </div>
        </div>
      </nav>{" "}
    </div>
  );
};

export default Navbar;

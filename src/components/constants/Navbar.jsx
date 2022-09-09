import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>

          <div className="d-flex justify-content-end mx-5">
            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" to="/careers">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/faqs">
                        FaQs
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/voyage"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Explore
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" to="/powershot">
                        Powershot
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/voyage">
                        Bon-Voyage
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarNavDarkDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/terms"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Miscellaneous
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link className="dropdown-item" to="/term">
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/privacy">
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/refund">
                        Refund
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/pricing">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/skill">
                        Skills
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

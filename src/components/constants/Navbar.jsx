import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div class="container__nav">
      <nav
        class="navbar navbar-expand-md fixed-top"
        aria-current="true"
        // style=""
      >
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            CodeVita
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="true" to="/Home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Features
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </Link>
            </li>
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Support
              </Link>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/">
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/">
                    Pricing
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    // <div>
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="/">
    //         Navbar
    //       </a>

    //       <div className="d-flex justify-content-end mx-5">
    //         <div
    //           className="collapse navbar-collapse"
    //           id="navbarNavDarkDropdown"
    //         >
    //           <ul className="navbar-nav">
    //             <li className="nav-item dropdown">
    //               <Link
    //                 className="nav-link dropdown-toggle"
    //                 to="/"
    //                 role="button"
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //               >
    //                 Home
    //               </Link>
    //               <ul className="dropdown-menu dropdown-menu-dark">
    //                 <li>
    //                   <Link className="dropdown-item" to="/careers">
    //                     Careers
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item" to="/faqs">
    //                     FaQs
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </li>
    //           </ul>
    //         </div>

    //         <div
    //           className="collapse navbar-collapse"
    //           id="navbarNavDarkDropdown"
    //         >
    //           <ul className="navbar-nav">
    //             <li className="nav-item dropdown">
    //               <Link
    //                 className="nav-link dropdown-toggle"
    //                 to="/voyage"
    //                 role="button"
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //               >
    //                 Explore
    //               </Link>
    //               <ul className="dropdown-menu dropdown-menu-dark">
    //                 <li>
    //                   <Link className="dropdown-item" to="/powershot">
    //                     Powershot
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item" to="/voyage">
    //                     Bon-Voyage
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </li>
    //           </ul>
    //         </div>

    //         <div
    //           className="collapse navbar-collapse"
    //           id="navbarNavDarkDropdown"
    //         >
    //           <ul className="navbar-nav">
    //             <li className="nav-item dropdown">
    //               <Link
    //                 className="nav-link dropdown-toggle"
    //                 to="/terms"
    //                 role="button"
    //                 data-bs-toggle="dropdown"
    //                 aria-expanded="false"
    //               >
    //                 Miscellaneous
    //               </Link>
    //               <ul className="dropdown-menu dropdown-menu-dark">
    //                 <li>
    //                   <Link className="dropdown-item" to="/term">
    //                     Terms and Conditions
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item" to="/privacy">
    //                     Privacy
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item" to="/refund">
    //                     Refund
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item" to="/pricing">
    //                     Pricing
    //                   </Link>
    //                 </li>
    //                 <li>
    //                   <Link className="dropdown-item" to="/skill">
    //                     Skills
    //                   </Link>
    //                 </li>
    //               </ul>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Navbar;

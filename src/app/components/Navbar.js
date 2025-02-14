// Navbar.js

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light 
                fixed-top text-light"
        style={{ backgroundColor: "#2DB973", fontFamily: "Times New Roman" }}
      >
        <div className="container">
          <Link
            className="navbar-brand 
                        text-light font-bold"
            href="/"
          >
            Caroline's Blog
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item d-flex mr-auto">
                <Link
                  href="/"
                  className="nav-item nav-link 
                                               text-light"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/createblog"
                  className="nav-item nav-link 
                                               text-light"
                >
                  Create Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

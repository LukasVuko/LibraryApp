import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <span className="icn-logo">
      <i className="material-icons">o</i>
    </span>
    <ul className="main-nav">
      <li>
        <NavLink to="/books">Books</NavLink>
      </li>
      <li>
        <NavLink to="/registerabook">Register a Book</NavLink>
      </li>
      <li>
        <NavLink to="/members">Members</NavLink>
      </li>
      <li>
        <NavLink to="/registeramember">Register a Member</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;

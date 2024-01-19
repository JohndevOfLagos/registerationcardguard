import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink to="/" className="nav-list_links">
            <span className="register-color">Register Now !</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="registration/start" className="nav-list_links">
            <span>New Registration</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="edit/registration" className="nav-list_links">
            <span>Edit Registration</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="registration/track-registration-status"
            className="nav-list_links"
          >
            <span>Track Registration Status</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/pay/registation" className="nav-list_links">
            <span>Pay Registration Fee</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="site/login" className="nav-list_links">
            <span>Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/site/login" className="nav-list_links">
           <span>
           Admin
           </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

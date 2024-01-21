import React from "react";
import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import appLogo from "../../Assets/image/CONG_Official_Logo.png";

export const Navigation = () => {
  return (
    <nav>
      <div className="innner-nav">
        <ul className="nav-list">
          <img src={appLogo} alt="" />
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
            <NavLink to="/site/login" className="nav-list_links">
              <span>
                <Icon icon="uis:padlock" />
                Login
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/site/login" className="nav-list_links">
              <span>
                <Icon icon="eos-icons:admin" />
                Admin
              </span>
            </NavLink>
          </li>
        </ul>
        <ul className="nav-buttom-cont">
          <li className="nav-buttom">
            <NavLink to="/about" className="nav-list_links">
              <span>About</span>
            </NavLink>
          </li>
          <li className="nav-buttom">
            <NavLink to="/help" className="nav-list_links">
              <span>Help</span>
            </NavLink>
          </li>
          <li className="nav-buttom">
            <NavLink to="/contact" className="nav-list_links">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

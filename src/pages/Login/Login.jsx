import React from "react";
import "./Login.scss";

import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom/dist/index";

import TestimonieImage2 from "../../Assets/image/Testimonie-image 2.png";
import Glassdoor from "../../Assets/image/glassdor-rating.png";

export const Login = () => {
  return (
    <div className="login">
      <div className="inner-login">
        <span className="login-head">
          Not a member yet?<Link to="../registration/start">Join</Link>
        </span>
        <form action="" className="login-form">
          <h2>Log in your Membership Card Account</h2>
          <button className="loginwithgoogle">
            <Icon icon="devicon:google" />
            Continue with Google
          </button>
          <div className="input-group">
            <input required id="input" type="email" />
            <label className="label" htmlFor="input">
              Email
            </label>
          </div>
          <div className="input-group">
            <input required id="input" type="password" />
            <label className="label" htmlFor="input">
              Password
            </label>
          </div>
          <button className="login-btn">Log in</button>
        </form>
      </div>
      <div className="testimonie">
        <Link to="https://shorturl.at/ehGX2" target="_blank" className="rating">
          <img src={Glassdoor} alt="" />
        </Link>
        <div className="testimonie-card">
          <div className="inner-testimonie-card">
            <div className="testimonie-image">
              <img src={TestimonieImage2} alt="" />
            </div>
            <p>
              “A membership card serves as proof of belonging to an
              organization, granting access to exclusive perks, discounts,
              events, and fostering community engagement among like-minded
              individuals.”
            </p>
          </div>
          <div className="testimonie-profile">
            <Icon icon="ri:navigation-fill" />
            <p>Henry Paul, Force Sustainment . (IF)</p>
          </div>
        </div>
        <footer>
          Join 2,000,000+ Member who trust Colorado National Guard with their
          Membership Card
        </footer>
      </div>
    </div>
  );
};

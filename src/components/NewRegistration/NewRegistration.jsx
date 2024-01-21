import React from "react";

import { Icon } from "@iconify/react";

import { Link } from "react-router-dom/dist/index";

import Glassdoor from "../../Assets/image/glassdor-rating.png";
import TestimonieImage1 from "../../Assets/image/Testimonie-image 1.png";

import "./NewRegistration.scss";

export const NewRegistration = () => {
  return (
    <div className="NewRegistration">
      <div className="inner-NewRegistration">
        <span className="Register-head">
          Already have an account?<Link to="/site/login">Log in</Link>
        </span>
        <form action="" className="register-form">
          <h2>Sign up and start your Registration</h2>
          <button className="Google-Auth">
            <Icon icon="devicon:google" />
            Continue with Google
          </button>
          <div className="form-group">
            <input required id="input" type="text" />
            <label className="label" htmlFor="input">
              Full Name
            </label>
          </div>
          <div className="form-group">
            <input required id="input" type="email" />
            <label className="label" htmlFor="input">
              Email
            </label>
          </div>
          <div className="form-group">
            <input required id="input" type="password" />
            <label className="label" htmlFor="input">
              Password
            </label>
          </div>
          <button className="submit-btn">Start Registration</button>
        </form>
        <footer>
          By signing up, you agree to our <span>Terms of Use</span> and{" "}
          <span>Privacy Policy.</span>
        </footer>
      </div>

      <div className="testimonie">
        <Link to="https://shorturl.at/ehGX2" target="_blank" className="rating">
          <img src={Glassdoor} alt="" />
        </Link>
        <div className="testimonie-card">
          <div className="inner-testimonie-card">
            <div className="testimonie-image">
              <img src={TestimonieImage1} alt="" />
            </div>
            <p>
              “A membership card grants access to exclusive facilities,
              discounts, events, and community engagement. It often serves as
              identification and may include voting rights within the
              organization.”
            </p>
          </div>
          <div className="testimonie-profile">
            <Icon icon="ri:navigation-fill" />
            <p>Amita Kehlmann, Operations. (OPS)</p>
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

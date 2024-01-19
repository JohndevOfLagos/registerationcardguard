import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import "./Card.scss"

export const Card = () => {
  return (
    <div className="card">
      <div className="inner-card">
        <div className="card-left">
          <h1>Welcome</h1>
          <div className="card-info">
          <div className="card-info_readme">
           <span> Submit your personal details for the Colorado National Guard
            Membership Card.</span>
            <span>Filling out the Online form is the first step in
            the process of registration.</span>
            <span>You will still need to complete your
            registration where we revive your Application information for a
            Membership Card.</span><span>Before Starting: (Review)</span>
          </div>
          <span>
            1.
          <Link>How to fill the registration form</Link>
          </span>
          <span>
            2. 
          <Link>List of documents you will need</Link>
          </span>
          </div>
        </div>
        <div className="card-right">
          <span className="card-right_top">
          <Icon icon="bxs:user-plus" />
             <div className="cardbox">
             <Link to="registration/start">Start Registration</Link>
             </div>
          </span>
          <span className="card-right_buttom">
          <Icon icon="fluent:contact-card-24-filled" />
             <div className="cardbox">
             <Link to="registration/track-registration-status">Track Registration</Link>
             </div>
          </span>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav>
      <span>Register Now !</span>
      <div className="nav-list">
        <Link>
          <span>New Registration</span>
        </Link>
        <Link>
          <span>Edit Registration</span>
        </Link>
        <Link>
          <span>Track Registration Status</span>
        </Link>
        <Link>
          <span>Pay Registration Fee</span>
        </Link>
        <Link>
          <span>Login</span>
        </Link>
        <Link>
          <span>Admin</span>
        </Link>
      </div>
    </nav>
  );
};

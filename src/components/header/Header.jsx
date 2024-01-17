import React from "react";
import "./Header.scss";
import AppLogo from "../../Assets/image/CONG_Official_Logo.png";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div className="inner_header">
          <div className="top-header">
            <Link>
              <img src={AppLogo} alt="" />
            </Link>
            <Link className="appName">Membership Card Registration</Link>
            <span>
              <Link>About</Link>
              <Link>Help</Link>
              <Link>Contact</Link>
            </span>
          </div>
      </div>
    </header>
  );
};

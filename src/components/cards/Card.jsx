import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
import { SliderMIlitaryImage } from "./SliderMIlitaryImage";
import MilBanner from "Assets/MillitaryImage/Banner-JoinNow-ArmyAir2.png"


import slideA from "Assets/MillitaryImage/A.jpeg";
import slideB from "Assets/MillitaryImage/B.jpeg";
import slideC from "Assets/MillitaryImage/C.jpeg";
import slideD from "Assets/MillitaryImage/D.jpeg";
import slideE from "Assets/MillitaryImage/E.jpeg";
import slideF from "Assets/MillitaryImage/F.jpeg";
import slideG from "Assets/MillitaryImage/G.jpeg";
import slideH from "Assets/MillitaryImage/H.jpeg";
import slideI from "Assets/MillitaryImage/I.jpeg";
import slideJ from "Assets/MillitaryImage/J.jpeg";
import slideK from "Assets/MillitaryImage/K.jpeg";
import slideL from "Assets/MillitaryImage/L.jpeg";
import slideM from "Assets/MillitaryImage/M.jpeg";
import slideN from "Assets/MillitaryImage/N.jpeg";

export const Card = () => {

  const images = [   slideA, slideB, slideC, slideD, slideE,
    slideF, slideG, slideH, slideI, slideJ,
    slideK, slideL, slideM, slideN];

  return (
    <div className="card">
      <div className="inner-card">
        <div className="card-right">
           <div className="card-image__slider">
           <img src={MilBanner} alt="" />
          <SliderMIlitaryImage images={images}  />
           </div>
        </div>

        <div className="card-left">
          <h1>Welcome</h1>
          <div className="card-info">
            <div className="card-info_readme">
              <span>
                Submit your personal details for the Colorado National Guard
                Membership Card.
              </span>
              <span>
                Filling out the Online form is the first step in the process of
                registration.
              </span>
              <span>
                You will still need to complete your registration where we
                revive your Application information for a Membership Card.
              </span>
              <span>Before Starting: (Review)</span>
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
      </div>
    </div>
  );
};

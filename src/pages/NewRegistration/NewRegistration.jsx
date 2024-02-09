import React, { useState } from "react";
// import { useEffect } from 'react';

import { Icon } from "@iconify/react";

import { Link } from "react-router-dom";

import Glassdoor from "../../Assets/image/glassdor-rating.png";
import TestimonieImage1 from "../../Assets/image/Testimonie-image 1.png";

import "./NewRegistration.scss";



/* NAVIGATIONS */



// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


import { authSignOut} from "../../firebase/firebaseAuth";


/*  FIREBASE  */

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsX2DYBMGmRAudDb6olsN-xt6H9YZjyYA",
  authDomain: "registerationcardguard.firebaseapp.com",
  projectId: "registerationcardguard",
  storageBucket: "registerationcardguard.appspot.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* END OF FIREBASE*/



export const NewRegistration = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  



  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
    const value = event.target.value
    setEmailInput(value);
    setIsEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
    const value = event.target.value
    setPasswordInput(value);
    setIsPasswordValid(passwordRegex.test(value));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const clearAuthFields = () => {
    setEmailInput("");
    setPasswordInput("");
  };

  const navigate = useNavigate();

  //

  const createAccountHandler = (event) => {
    event.preventDefault();
    
    if (isEmailValid && isPasswordValid) {
      console.log('Logging in...');
      authCreateAccountWithEmail();
    } else {
      console.log('Invalid input. Please check your credentials.');
    }
  };

  //

  const authCreateAccountWithEmail = () => {
    const email = emailInput;
    const password = passwordInput;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        clearAuthFields();

      })
      .catch((error) => {
        console.error(error.message);
      });
  }; 



//

    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/registration/user/dashboard");
      } else {
        authSignOut();
      }
    });

  
  //



  // SIgn Up Google  HAndler 

  function authSignInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("google signup successful");
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
        // ...
      });
  }




  /* EMAIL LINK VERIFICATION */

  const isSubmitDisabled = !isEmailValid || !isPasswordValid || emailInput.trim() === '' || passwordInput.trim() === '';


  return (
    <div className="NewRegistration">
      <div className="inner-NewRegistration">
        <span className="Register-head">
          Already have an account?<Link to="/login">Log in</Link>
        </span>
        <form action="" className="register-form">
          <h2>Sign up and start your Registration</h2>
          <button className="Google-Auth" onClick={authSignInWithGoogle}>
            <Icon icon="devicon:google" />
            Continue with Google
          </button>
          <div className="form-group">
            <input
            className={!isEmailValid ? 'invalid' : ''}
              required
              id="email"
              type="email"
              value={emailInput}
              onChange={handleEmailChange}
              pattern={emailRegex}
            />
            <label className="label" htmlFor="input">
              Email
            </label>
            {!isEmailValid && <div className="input-error">Invalid email address.</div>}
          </div>
         
          <div className="form-group">
            <input
             className={!isPasswordValid ? 'invalid' : ''}
              required
              id="password"
              type={showPassword ? "text" : "password"}
              value={passwordInput}
              onChange={handlePasswordChange}
              pattern={passwordRegex}
              maxLength={15}
            />
            <label className="label" htmlFor="input">
              Password
            </label>
            <span className="eye-icon" onClick={handleTogglePassword}>
              {showPassword ? (
                <Icon icon="el:eye-open" />
              ) : (
                <Icon icon="el:eye-close" />
              )}
            </span>
            {!isPasswordValid && (
          <div className="input-error">
            Password must be at least 8 characters with one lowercase, one uppercase, and one digit.
          </div>
        )}
        
          </div>

          <button onClick={createAccountHandler} className="submit-btn" disabled={isSubmitDisabled}>
            Start Registration
          </button>
        </form>
        <footer>
          By signing up, you agree to our <span>Terms of Use</span> and{" "}
          <span>Privacy Policy.</span>
        </footer>
      </div>

      <div className="registeter-testimonie">
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

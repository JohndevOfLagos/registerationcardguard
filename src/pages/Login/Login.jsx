import React, { useState } from "react";
import "./Login.scss";

import { Icon } from "@iconify/react/dist/iconify";
import { Link } from "react-router-dom/dist/index";

import TestimonieImage2 from "Assets/image/Testimonie-image 2.png";
import Glassdoor from "Assets/image/glassdor-rating.png";

/* NAVIGATIONS */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/*  FIREBASE  */

import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  GoogleAuthProvider,
  signInWithPopup
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

export const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);






  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  };



  // 

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  //


  const clearAuthFields = () => {
    setEmailInput("");
    setPasswordInput("");
  };
  

  const navigate = useNavigate();

  function authSignInWithEmail() {
    const email = emailInput;
    const password = passwordInput;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        clearAuthFields()
      })
      .catch((error) => {
       let newError = error.message;
        newError ='There was a problem logging in. Check your email and password or create an account.'
        console.error(error.message);
        setErrorMessage(newError);
      });
  }
 
  


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/registration/user/dashboard");
        setErrorMessage("Login successfully")
      } else {
        // Additional logic for when the user is not authenticated
        const error = new Error("User is not authenticated.");
        // console.log("User is not authenticated.");
        setErrorMessage(error.message)
      }
    });
  
    return () => unsubscribe();
  }, [navigate]);


  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     // User is already logged in, navigate back to home
  //     navigate("/");
  //   }
  // }, [isLoggedIn, navigate]);



  

  const loginhandler = (event) => {
    event.preventDefault();
    authSignInWithEmail();
  };


// 




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


const inputType = showPassword ? 'text' : 'password';


const isSubmitDisabled = emailInput.trim() === '' || passwordInput.trim() === '';


  
  

  return (
    <div className="login">
      <div className="inner-login">
        <span className="login-head">
          Not a member yet?<Link to="../registration/start">Join</Link>
        </span>
        <form action="" className="login-form">
          <h2>Log in your Membership Card Account</h2>
          <button className="loginwithgoogle" onClick={authSignInWithGoogle}>
            <Icon icon="devicon:google" />
            Continue with Google
          </button>
          <div className="input-group">
            <input
              required
              id="email"
              type="email"
              value={emailInput}
              onChange={handleEmailChange}
            />
            <label className="label" htmlFor="input">
              Email
            </label>
          </div>
          <div className="input-group">
            <input
              required
              id="password"
              type={inputType}
              value={passwordInput}
              onChange={handlePasswordChange}
              maxLength={15}
            />
            <label className="label" htmlFor="passsword">
              Password
            </label>
            <span className="login__eye-icon" onClick={handleTogglePassword}>
            {showPassword ? <Icon icon="el:eye-open" /> : <Icon icon="el:eye-close" />}
            </span>
            {errorMessage &&  <span className="input-error">
               {errorMessage}
            </span> }
            
          </div>
          <button onClick={loginhandler} className="login-btn" disabled={isSubmitDisabled}>
            Log in
          </button>
          <span className="forgetpassword-link">
            or
          <Link to="/user/forgot-password/">forget password</Link>
          </span>
        </form>
      </div>
      <div className="login-testimonie">
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

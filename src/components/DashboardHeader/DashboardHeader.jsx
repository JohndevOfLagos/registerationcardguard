import React, { useState, useRef, useCallback, useEffect } from "react";
import "./DashboardHeader.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import UserAvatar from "Assets/image/User-avatar.svg.png";

/*  FIREBASE  */

import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsX2DYBMGmRAudDb6olsN-xt6H9YZjyYA",
  authDomain: "registerationcardguard.firebaseapp.com",
  projectId: "registerationcardguard",
  storageBucket: "registerationcardguard.appspot.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//
export const DashboardHeader = ({ toggleSideNav, handleLogout }) => {
  const navigate = useNavigate();
  const userProfileImageRef = useRef(null); // Create a ref for the image element
  const [openprofile, setOpenprofile] = useState(false);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userGreeting, setUserGreeting] = useState(null);


  
  const openProfileHandler = () => {
    setOpenprofile((prevOpenProfile) => !prevOpenProfile);
  };

  // Signout the user

  const authSignOut = useCallback(() => {
    signOut(auth)
      .then(() => {
        handleLogout(null);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [handleLogout, navigate]);

  //

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userNameElement = document.getElementById("user-name");
        const userProfileImageElement = userProfileImageRef.current;

        if (userNameElement && userProfileImageElement) {
          showUserGreeting(userNameElement, user, (newGreeting) => {
            console.log("newGreeting:", newGreeting);
            setUserGreeting(newGreeting);
          });

          showProfilePicture(userProfileImageElement, user);
        } else {
          console.error(
            "Element with ID 'user-name' or user profile image not found."
          );
        }
      } else {
        authSignOut();
      }
    });

    return () => {
      unsubscribe();
    };
  }, [authSignOut, userProfileImageRef, userGreeting]);

  //  Show or Display user Profile Picture

  function showProfilePicture(imgElement, user) {
    const photoURL = user.photoURL;
    if (photoURL) {
      imgElement.src = photoURL;
    } else {
      imgElement.src = UserAvatar;
    }
  }

  //  USer Greeting

  function showUserGreeting(element, user) {
    const displayName = user.displayName;

    if (element) {
      if (displayName) {
        const userFirstName = displayName.split(" ")[0];
        setUserFirstName(userFirstName);
        element.textContent = `Hey!  ${userFirstName}, how are you?`;
      } else {
        element.textContent = `Hey friend, how are you?`;
      }
    }
  }

  return (
    <header className="Dashboard__header">
      <ul className="left-nav__header">
        <li>
          <button onClick={toggleSideNav}>
          <Icon icon="ep:menu" />
            SideMenu
            </button>
        </li>
        <div id="user-name">{userGreeting}</div>
      </ul>
      <ul className="right-nav__header">
      <li>
          <span>
            <Icon icon="simple-icons:googleforms" />
            DD1172-2 FORM
          </span>
        </li>
        <li>
          <button className="save-btn">
            <Icon icon="uil:export" />
            Export
          </button>
        </li>
        <li>
          <div className="user-profileImage" onClick={openProfileHandler}>
            <img ref={userProfileImageRef} alt="user-profile_picture" />
          </div>
        </li>
      </ul>
      {openprofile && (
        <div className="userprofile">
          <div className="inner-userprofile">
            <div className="userprofile-name">
              {userFirstName}
              <span>
                0 <Icon icon="openmoji:purple-heart" />
              </span>
            </div>
            <ul className="userprofile__Navlist">
              <li>
                <Link to="user/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="update__profile">Update Profile</Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <Link>New Scrims</Link>
              </li>
            </ul>
            <button className="logout-btn" onClick={authSignOut}>
              <span>
                <Icon icon="mingcute:power-line" />
                Log out
              </span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

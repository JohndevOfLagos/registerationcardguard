import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
// import { Icon } from "@iconify/react";
import { FormSideNavigations } from "components/FormSideNavigations/FormSideNavigations";
import { UpdateProfile } from "pages/UpdateProfile/UpdateProfile";
// import { useNavigate } from "react-router-dom";
import StepperProgressBar from "components/StepperProgressBar/StepperProgressBar";
import { DashboardHeader } from "components/DashboardHeader/DashboardHeader";
import "./ContentManagement.scss";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsX2DYBMGmRAudDb6olsN-xt6H9YZjyYA",
  authDomain: "registerationcardguard.firebaseapp.com",
  projectId: "registerationcardguard",
  storageBucket: "registerationcardguard.appspot.com",
};

const app = initializeApp(firebaseConfig);

/* END OF FIREBASE*/


export const ContentManagement = (toggleSideNav) => {
  const [, setUser] = useState(null);
  // const navigate = useNavigate();
 // Declare userFirstName state

  const [openNav, setOpenNav] = useState(false);

  const auth = getAuth(app);


  //


  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  // eslint-disable-next-line no-unused-vars
  const handleLogin = (user) => {
    setUser(user);
  };

  // eslint-disable-next-line no-unused-vars
  const handleLogout = () => {
    setUser(null);
  };

  // no-restricted-globals



  return (
    <div>
      <div className="content-management">
        <article className="content-management__layout">
         <FormSideNavigations toggleSideNav={() => setOpenNav(prev => !prev)} showMobileFormSideNavigations={openNav}/>
     
          <div className="content-management__content">
          <DashboardHeader toggleSideNav={() => setOpenNav(prev => !prev)} handleLogout={handleLogout}/>
            <div className="RegistrationForm-progressbar"></div>
            <Suspense fallback={<div>Loading</div>}>
              <Routes>
                <Route
                  path="user/dashboard"
                  exact
                  element={<StepperProgressBar />}
                />
                <Route
                  path="update__profile"
                  exact
                  element={<UpdateProfile />}
                />
              </Routes>
            </Suspense>
          </div>
        </article>
      </div>
    </div>
  );
};

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

/*  FIREBASE  */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsX2DYBMGmRAudDb6olsN-xt6H9YZjyYA",
  authDomain: "registerationcardguard.firebaseapp.com",
  projectId: "registerationcardguard",
  storageBucket: "registerationcardguard.appspot.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


/* END OF FIREBASE*/

export const PrivateRoutes = () => {
  return (
   !!auth.currentUser !== undefined ? <Outlet /> : <Navigate to="/login" />
)
    
}

export default PrivateRoutes;



// Firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsX2DYBMGmRAudDb6olsN-xt6H9YZjyYA",
  authDomain: "registerationcardguard.firebaseapp.com",
  projectId: "registerationcardguard",
  storageBucket: "registerationcardguard.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const onAuthState = onAuthStateChanged;

export const authSignOut = () => {
  return signOut(auth);
};

//  Greet User NAme

// export function showUserGreeting(element, user) {
//   const displayName = user.displayName;

//   if (element) {
//     if (displayName) {
//       const userFirstName = displayName.split(" ")[0];
//       element.textContent = `Hey! ${userFirstName}, how are you?`;
//     } else {
//       element.textContent = `Hey friend, how are you?`;
//     }
//   }

// }

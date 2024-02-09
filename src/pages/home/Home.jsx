 import React, { useEffect, useState} from 'react'
 import { Card } from '../../components/cards/Card'
 import { Header } from 'components/Header/Header'
import { SideBarNavigation  } from 'components/SideBarNavigation/SideBarNavigation'

 import "./Home.scss"

 import { initializeApp } from "firebase/app";
import { getAuth, 
  onAuthStateChanged, 
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsX2DYBMGmRAudDb6olsN-xt6H9YZjyYA",
  authDomain: "registerationcardguard.firebaseapp.com",
  projectId: "registerationcardguard",
  storageBucket: "registerationcardguard.appspot.com",
};

const app = initializeApp(firebaseConfig);


 export const Home = () => {
  const [mobileSidebarIsOpen, setMobileSidebarIsOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const mobileSidebarHandler = (e) => {
    e.preventDefault();
    setMobileSidebarIsOpen(prev => !prev)
  }

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);


   return (

      <div>
        <Header toggleSideNav={mobileSidebarHandler}  isLoggedIn={isLoggedIn}/>
        <SideBarNavigation showMobileNav={mobileSidebarIsOpen} toggleSideNav={mobileSidebarHandler}/>
        <main className="Main_Home__Section">
        <Card/>
        </main>
      </div>
      
   )
 }
 
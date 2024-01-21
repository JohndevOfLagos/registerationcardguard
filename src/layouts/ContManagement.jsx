import React from 'react'

import { NewRegistration } from '../components//NewRegistration/NewRegistration'
import { EditRegistration } from '../components/Edit Registration/EditRegistration'
import { TrackRegistrationStatus } from '../pages/TrackRegistrationStatus/TrackRegistrationStatus'
import { PayRegistrationFee } from '../components/Pay Registration Fee/PayRegistrationFee'
import { Login } from '../pages/Login/Login'
import { Admin } from '../pages/Admin/Admin'

import "./ContManagement.scss"
import { Route, Routes } from 'react-router-dom';

import { Navigation } from '../components/Naviagtion/Navigation'
import { Home as Homepage } from '../pages/home/Home'
import { Suspense } from 'react'


export const ContManagement = () => {
  return (
    
<div className='ContentManagement'>
      <article className='ContentManagement-layout'>
        <Navigation/>

         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path="/" element={<Homepage/>}/>
               <Route path="registration/start" element={<NewRegistration/>}/>
               <Route path="edit/registration" element={<EditRegistration/>}/>
               <Route path="registration/track-registration-status" element={<TrackRegistrationStatus/>}/>
               <Route path="/pay/registation" element={<PayRegistrationFee/>}/>
               <Route path="/site/login" element={<Login/>}/>
               <Route path="/admin/site/login" element={<Admin/>}/>
            </Routes>
         </Suspense>
      </article>
    </div>


  )
}

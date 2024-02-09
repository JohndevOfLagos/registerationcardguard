// AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "pages/home/Home";
import { NotFound } from "pages/NotFound/NotFound";
import { Login } from "pages/Login/Login";
import { NewRegistration } from "pages/NewRegistration/NewRegistration";
import { EditRegistration } from "pages/EditRegistration/EditRegistration";
import { PayRegistrationFee } from "pages/PayRegistrationFee/PayRegistrationFee";
import { ContentManagement } from "layout/ContentManagement";

import PrivateRoutes from "utils/PrivateRoutes";
import { ForgetPassword } from "pages/ForgetPassword/ForgetPassword";

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoutes />}>
        <Route
          path="/registration/*"
          element={<ContentManagement  />}/>
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/edit/registration" element={<EditRegistration />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/pay/registration" element={<PayRegistrationFee />} />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/user/forgot-password/" element={<ForgetPassword />} />
      <Route path="/registration/start" element={<NewRegistration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

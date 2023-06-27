import React, { Suspense, useEffect } from 'react';
import AuthLayout from "../layout/AuthLayout";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../components/Home"
import About from "../components/About"
import Contact from '../components/Contact';
import Propoties from '../components/Propoties';


export const PublicRoutes = () => {
  return (
    <>
     <Suspense>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/propoties" element={<Propoties />} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
      </Suspense>
    </>
  );
};

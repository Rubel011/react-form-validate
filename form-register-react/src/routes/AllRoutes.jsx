import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/HomePage";
import FormRegister from "../components/FormRegister";
import ErrorPage from "../components/ErrorPage";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register-form" element={<FormRegister />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AllRoutes;

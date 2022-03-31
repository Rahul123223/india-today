import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import  {Register}  from "../components/Register/Register"; 

export const AllRoutes = () => {
  return (
    <>
    
     
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Register" element={<Register />}/>
        
      </Routes>
    </>
  );
};

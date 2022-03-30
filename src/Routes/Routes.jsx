import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Navbar } from "../components/Navbar/Navbar";
import { India } from "../components/Section/India";
import { Myfeed } from "../components/Section/Myfeed";
import { Business } from "../components/Section/Business";
import { Tech } from "../components/Section/Tech";
import { World } from "../components/Section/World";
import { Movies } from "../components/Section/Movies";
import { Ipl } from "../components/Section/Ipl";
import { Science } from "../components/Section/Science";
import { Happiness } from "../components/Section/Happiness";
import { Signup } from "../Signup-in/Signup";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/myfeed" element={<Myfeed />} />
        <Route exact path="/india" element={<India />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/world" element={<World />} />
        <Route exact path="/tech" element={<Tech />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/ipl" element={<Ipl />} />
        <Route exact path="/science" element={<Science />} />
        <Route exact path="/happiness" element={<Happiness />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

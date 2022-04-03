import React from "react";
import { Routes, Route } from "react-router-dom";
<<<<<<< Updated upstream
import { Home } from "../components/Home/Home";
import  {Signin}  from "../components/Signin/Signin"; 
import{Register} from "../components/Register/Register";
=======
import { Navbar } from "../components/Navbar/Navbar";
import { India } from "../components/Section/India";
import { MyNewsFeed } from "../components/Section/MyNewsFeed";
import { Business } from "../components/Section/Business";
import { Tech } from "../components/Section/Tech";
import { World } from "../components/Section/World";
import { Movies } from "../components/Section/Movies";
import { Ipl } from "../components/Section/Ipl";
import { Science } from "../components/Section/Science";
import { Happiness } from "../components/Section/Happiness";
import { Footer } from "../components/Footer/Footer";
import { LandingPage } from "../components/Home/LandingPage";
// import { Register } from "../components/User/Register";
import { Signin } from "../components/User/Signin";
>>>>>>> Stashed changes

export const AllRoutes = () => {
  return (
    <>
    
     
      <Routes>
<<<<<<< Updated upstream
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Signin" element={<Signin />}/>
        <Route exact path="/Register" element={<Register />}/>
        
      </Routes>
=======
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/myfeed" element={<MyNewsFeed />} />
        <Route exact path="/india" element={<India />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/world" element={<World />} />
        <Route exact path="/tech" element={<Tech />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/ipl" element={<Ipl />} />
        <Route exact path="/science" element={<Science />} />
        <Route exact path="/happiness" element={<Happiness />} />
        <Route exact path="/signup" element={<Signin />} />
        {/* <Route exact path="/register" element={<Register />} /> */}
      </Routes>
      <Footer />
>>>>>>> Stashed changes
    </>
  );
};

import React from "react";
import "../styles/navbar.css";
// import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar" id="navbar">
      <ul>
        <li>IndaToday</li>
        <li>Malayam</li>
        <li>Business Today</li>
        <li>DailyO</li>
        <li>AajTak</li>
        <li>Lallantop</li>
        <li>GNTTV</li>
        <li>iChowk</li>
        <li>Reader's Digest</li>
      </ul>
      <hr />
     <div className="nav-centrall">
         <ul>
             <li>News</li>
             <li>LIVE TV</li>
             <img src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.52" alt="" />
             <li>App</li>
             <li>Magazine</li>
         </ul>
     </div>
     <div className="nav-bottom" id="nav-bottom">
     <ul>
        <li>HOME</li>
        <li>MY FEED</li>
        <li>INDIA</li>
        <li>BUSINESS</li>
        <li>WORLD</li>
        <li>TECH</li>
        <li>MOVIES</li>
        <li>IPL 2022</li>
        <li>SCIENCE</li>
        <li>HAPPINESS QUEST</li>
      </ul>
     </div>
    </div>
  );
};

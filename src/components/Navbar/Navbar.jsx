import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { CgScreen } from "react-icons/cg";
import { FaBitcoin } from "react-icons/fa";

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
          <img
            src="https://akm-img-a-in.tosshub.com/sites/all/themes/itg/logo.png?v=1.52"
            alt=""
          />
          <li>App</li>
          <li>Magazine</li>
        </ul>
      </div>
      <div className="nav-bottom" id="nav-bottom">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/myfeed"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              MY FEED
            </Link>
          </li>
          <li>
            <Link
              to="/india"
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              INDIA
            </Link>
          </li>
          <li>
            <Link
              to="/business"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              BUSINESS
            </Link>
          </li>
          <li>
            <Link
              to="/world"
              style={{ textDecoration: "none", color: "white" }}
            >
              WORLD
            </Link>
          </li>
          <li>
            <Link to="/tech" style={{ textDecoration: "none", color: "white" }}>
              TECH
            </Link>
          </li>
          <li>
            <Link
              to="/movies"
              style={{ textDecoration: "none", color: "white" }}
            >
              MOVIES
            </Link>
          </li>
          <li>
            <Link to="/ipl" style={{ textDecoration: "none", color: "white" }}>
              IPL 2022
            </Link>
          </li>
          <li>
            <Link
              to="/science"
              style={{ textDecoration: "none", color: "white" }}
            >
              SCIENCE
            </Link>
          </li>
          <li>
            <Link
              to="/happiness"
              style={{ textDecoration: "none", color: "white" }}
            >
              HAPPINESS QUEST
            </Link>
          </li>
          <li>
            <FaBitcoin style={{ height: "20px" }}></FaBitcoin>
          </li>
          <li>
            <CgScreen style={{ height: "20px" }}></CgScreen>
          </li>
          <li>
            <FaShareAlt style={{ height: "20px" }}></FaShareAlt>
          </li>
          <li>
            <FaSearch style={{ height: "20px" }}></FaSearch>
          </li>
          <li>
            <FaUser style={{ height: "20px" }}></FaUser>
          </li>
        </ul>
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import group from "../assets/theGroup.png";
import "../styles/aboutHome.css";

export default function AboutHome() {
  return (
    <div className="about">
      <div className="mainContainer">
        <img src={group} />
        <div className="linkContainer">
          <Link className="link" to="/aboutUs/main">
            Our Purpose
          </Link>
          <Link className="link" to="/aboutUs/main">
            Where we are
          </Link>
          <Link className="link" to="/aboutUs/main">
            We DO Growth
          </Link>
          <Link className="link" to="/aboutUs/main">
            Our History
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import career from "../assets/career.png";
import "../styles/CareerHome.css";

export default function CareerHome() {
  return (
    <div className="career">
      <div className="mainContainer">
        <img src={career} />
        <div className="linkContainer">
          <Link className="link" to="/career/values">
            Our values
          </Link>
          <Link className="link" to="/career/values">
            How YOU Power PRU
          </Link>
          <Link className="link" to="/career/values">
            How PRU Powers YOU in your career
          </Link>
        </div>
      </div>
    </div>
  );
}

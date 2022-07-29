import React from "react";
import "../styles/aboutUs.css";
import topImage from "../assets/topImage.jpg";
export default function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="mainContainer">
        <img src={topImage} className="topImage" />
      </div>
      <div className="topContainer">
          <p className="aboutCompany">ABOUT US</p>
          <p className="ourCompany">Our company</p>
          <p className="inAsia">Prudential in Asia & Africa</p>
        </div>
      <div className="detailContainer">
        <p>
          We help people get the most out of life. We make healthcare affordable
          and accessible, we protect people’s wealth and grow their assets, and
          we empower our customers to save for their goals.
        </p>
        <p>
          In Asia and Africa, we have been providing familiar, trusted financial
          security to more than 18 million customers for almost 100 years.
          Today, we are headquartered in London and Hong Kong, ranking top three
          in 11 out of 13 Asian life markets through 540,000 agents and over
          26,000 bank branches.
        </p>
        <p>
          Prudential is focused on opportunities in the most exciting growth
          markets in Asia and Africa. With access to over five billion people,
          we are investing in broadening our presence in the life and asset
          management markets.
          <br />
          A crucial focus of our strategy is to form mutually healthy and
          sustainable relationships to deliver the most innovative savings,
          health and protection solutions to people in Asia and Africa. Our
          strategic partnerships drive mutual growth, create financial benefits
          and provide success to our partners, investors and the markets where
          we operate.
          <br />
          At the core of what we DO is people. We are committed to making a
          positive impact on our customers, our employees and our communities by
          delivering the best savings, health and protection solutions to people
          so they can get the most out of life.
        </p>
      </div>
    </div>
  );
}

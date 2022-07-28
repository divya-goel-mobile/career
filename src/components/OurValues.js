import React from "react";
import Card1 from "../assets/card1.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";
import Card4 from "../assets/card4.jpg";
import { useNavigate } from "react-router-dom";

import "../styles/ourValues.css";

const OurValues = () => {
  const hotList = [
    { id: 1, name: "How to THINK about being AMBITIOUS", image: Card1 },
    { id: 2, name: "How to THINK about being CURIOUS", image: Card2 },
    { id: 3, name: "How to THINK about being EMPATHETIC", image: Card3 },
    { id: 4, name: "How to THINK about being COURAGEOUS", image: Card4 },
  ];
  return (
    <div className="ourValues">
      <div className="mainContainer">
        <div className="innerContainer">
          {hotList.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="cardMainContainer">
      <div className="cardInnerContainer">
        <img src={data.image} className="cardImage" />
        <div className="cardTextContainer">
          <p
            style={{
              marginLeft: 22,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {data.name}
          </p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate(`/career/values/detail/${data.id}`);
        }}
        style={{
          backgroundColor: "red",
          width: 30,
          height: 30,
          position: "absolute",
          right: 30,
          bottom: 5,
          borderRadius: 15,
          border: "2px solid red",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 20,
            marginLeft: 10,
          }}
        >
          {">"}
        </span>
      </button>
    </div>
  );
};
export default OurValues;

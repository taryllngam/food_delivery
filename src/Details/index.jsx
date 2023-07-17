import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import "../Details/style.css";
import { FoodContext } from "../context/FoodContext";
import { useState } from "react";

export default function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const { value } = useContext(FoodContext);
  const [currentFood, setcurrentFood] = useState();

  useEffect(() => {
    const food = value.find((ele) => ele.id === +params.id);
    setcurrentFood(food);
    console.log(food, params);
  }, [value,params]);

  return (
    <div className="display">
      <div className="display1">
        <div>
          <img src={currentFood?.image} alt=""/>
        </div>
        <div className="description">
          <h1 className="names">
            <span>NAME:</span> {currentFood?.name}
          </h1>
          <h1>
            {" "}
            <span className="describe">DESCRIPTION:</span>{" "}
            {currentFood?.details}
          </h1>
          <h1 className="price">PRICE: ${currentFood?.price}</h1>
          <button id="but1"
            onClick={() => {
              navigate(`/payment/${params.id}`);
            }}
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

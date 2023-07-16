import React, { useState } from "react";
import Model from "react-modal";
import { useNavigate } from "react-router";
import "../Modal/style.css";
import { TiTick } from "react-icons/ti";
import { FoodContext } from "../context/FoodContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function Modal({ visible, setVisible }) {
  const navigate = useNavigate();
  let { id } = useParams();
  const { value } = useContext(FoodContext);
  const food = value.find((ele) => ele.id == id);
  console.log(id);

  return (
    <div>
      <Model
        className="con1"
        isOpen={true}
        onRequestClose={() => setVisible(false)}
      >
        <div className="container2">
          <TiTick className="tick" />
          <div className="con3">
            <div className="container3">
              <div>
                <div className="images">
                  <img src={food?.image} />
                </div>
                <div>
                  <h1 className="names">NAME: {food?.name}</h1>
                  <h1 className="price">PRICE: ${food?.price}</h1>
                </div>
              </div>
            </div>
            <div className="appreciation">
              <h1>Thank You!</h1>
              <p>Your details have been succesfully submited.</p>
              <p>Your order will be delivered shortly</p>
              <div className="bttn">
                <button
                  className="close-btn"
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Model>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import '../Catalog/style.css'
import Details from "../../Details";
import { FoodContext } from "../../context/FoodContext";
import { useFoodItems } from "../../context/FoodContext";


export default function Catalog() {
	const navigate = useNavigate()
	// const foods = (JSON.parse(localStorage.getItem("foodStorage")));

	const {value} = useFoodItems()
	return (
		<>
		<div className="head">
			<div className="headTag">
		<h1 className="nameTag">WHAT WE  HAVE </h1>
		</div>
		</div>
		<div className="wrap">
			{value?.map((food) => {
				return (
					
					<div className="foods" key={food.name} >
					<div className="food" key={food.id}>
						<div className="foodStuffs">
						<img src={food.image} alt="" />
						<p>NAME: {food.name}</p>
						<p>PRICE:{food.price}</p>
						<button className="btn" onClick={() => {
						navigate(`/details/${food.id}`)
					}} >Details</button>
						</div>
					</div>
					</div>
					
				)
			})}
			</div>
		</>
	)
}
import React from "react";
import { availableIngredients } from "../App";
import "../App.css";

const IngredientList = ({ addToBurger }) => {
	return (
		<ul>
			{availableIngredients.map((ingredient, index) => (
				<li key={index} style={{ backgroundColor: `${ingredient.color}` }}>
					<p>{ingredient.name}</p>
					<button onClick={() => addToBurger(ingredient)}><span>+</span></button>
				</li>
			))}
		</ul>
	);
};

export default IngredientList;


import React from "react";

import classes from "./PizzaIngredient.module.css";
import salamiBackground from "../../../images/salami.svg";
import tomatoBackground from "../../../images/tomato.svg";
import blackOliveBackground from "../../../images/blackOlive.svg";
import greenOliveBackground from "../../../images/greenOlive.svg";
import redPepperBackground from "../../../images/redPepper.svg";
import yellowPepperBackground from "../../../images/yellowPepper.svg";

const PizzaIngredient = ({ type, fixed }) => {
  const types = {
    salami: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
    tomato: { backgroundImage: `url(${tomatoBackground})`, width: "35px", height: "35px" },
    blackOlive: { backgroundImage: `url(${blackOliveBackground})`, width: "10px", height: "10px" },
    greenOlive: { backgroundImage: `url(${greenOliveBackground})`, width: "10px", height: "10px" },
    redPepper: { backgroundImage: `url(${redPepperBackground})`, width: "20px", height: "20px" },
    yellowPepper: { backgroundImage: `url(${yellowPepperBackground})`, width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    const pizzaDiameter = 380;
    const pizzaRadius = pizzaDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * pizzaDiameter);
    const ingredientLeft = Math.round(Math.random() * pizzaDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - pizzaRadius, 2) + Math.pow(ingredientLeft - pizzaRadius, 2)
    ) + ingredientRadius;

    return distance < pizzaRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.PizzaIngredient} style={types[type]}></div>
  );
}

export default React.memo(PizzaIngredient);
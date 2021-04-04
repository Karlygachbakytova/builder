
import React from "react";

import classes from "./FlowerIngredient.module.css";
import roseBackground from "../../../images/rose.svg";
import lilyBackground from "../../../images/lily.svg";
import orchidBackground from "../../../images/orchid.svg";
import chamomileBackground from "../../../images/chamomile.svg";
import chrysanthemumBackground from "../../../images/chrysanthemum.svg";


const FlowerIngredient = ({ type, fixed }) => {
  const types = {
    rose: { backgroundImage: `url(${roseBackground})`, width: "35px", height: "35px" },
    lily: { backgroundImage: `url(${lilyBackground})`, width: "35px", height: "35px" },
    orchid: { backgroundImage: `url(${orchidBackground})`, width: "10px", height: "10px" },
    chamomile: { backgroundImage: `url(${chamomileBackground})`, width: "10px", height: "10px" },
    chrysanthemum: { backgroundImage: `url(${chrysanthemumBackground})`, width: "20px", height: "20px" },
   
  };

  function getPosition(ingredientWidth) {
    const flowerDiameter = 380;
    const flowerRadius = flowerDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * flowerDiameter);
    const ingredientLeft = Math.round(Math.random() * flowerDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - flowerRadius, 2) + Math.pow(ingredientLeft - flowerRadius, 2)
    ) + ingredientRadius;

    return distance < flowerRadius
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
    <div className={classes.FlowerIngredient} style={types[type]}></div>
  );
}

export default React.memo(FlowerIngredient);
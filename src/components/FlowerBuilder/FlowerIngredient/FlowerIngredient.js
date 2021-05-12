
import React from "react";

import classes from "./FlowerIngredient.module.css";
import roseBackground from "../../../images/rose.svg";
import bromeliadBackground from "../../../images/bromeliad.svg";
import lilyBackground from "../../../images/lily.svg";
import orchidBackground from "../../../images/orchid.svg";
import chamomileBackground from "../../../images/chamomile.svg";
import chrysanthemumBackground from "../../../images/chrysanthemum.svg";


const FlowerIngredient = ({ type, fixed }) => {
  const types = {
    bromeliad: { backgroundImage: `url(${bromeliadBackground})`, width: "63px", height: "130px" },
    orchid: { backgroundImage: `url(${orchidBackground})`, width: "63px", height: "130px" },
    chamomile: { backgroundImage: `url(${chamomileBackground})`, width: "63px", height: "130px" },
    chrysanthemum: { backgroundImage: `url(${chrysanthemumBackground})`, width: "63px", height: "130px" },
    lily: { backgroundImage: `url(${lilyBackground})`, width: "63px", height: "130px" },
    rose: { backgroundImage: `url(${roseBackground})`, width: "63px", height: "130px" },
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
  else {
    types[type].width = "40px";
    types[type].height = "80px";
  }
  // Get random rotation for this ingredient.


  return (
    <div className={classes.FlowerIngredient} style={types[type]}></div>
  );
}

export default React.memo(FlowerIngredient);
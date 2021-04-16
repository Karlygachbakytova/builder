import FlowerIngredient from "../FlowerIngredient/FlowerIngredient";

import classes from "./FlowerPreview.module.css";


const FlowerPreview = ({ ingredients, price}) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<FlowerIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.FlowerPreview}>
      <div className={classes.flower}>
        <div
          className={classes.ingredients}
          >
          {result}
        </div>
      </div>
      <div className={classes.price}>{price} som</div>
    </div>
  );
}

export default FlowerPreview;
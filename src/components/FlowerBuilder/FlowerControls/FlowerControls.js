import FlowerControl from "./FlowerControl/FlowerControl";
import classes from "./FlowerControls.module.css";

const FlowerControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
    // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render pizza control for this ingredient
    results.push(<FlowerControl
        key={ingredient}
        add={addIngredient}
        remove={removeIngredient}
        type={ingredient} />)
  }

  return (
    <div className={classes.FlowerControls}>
    <strong>Ingredients</strong>
    {results}
    <button disabled={!total}>Order</button>
  </div>
);
}

export default FlowerControls;
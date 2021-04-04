import FlowerControl from "./FlowerControl/FlowerControl";
import classes from "./FlowerControls.module.css";

const FlowerControls = ({ ingredients, addIngredient, removeIngredient }) => {
  const results = [];
  for (const ingredient in ingredients) {
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
    </div>
  );
}

export default FlowerControls;
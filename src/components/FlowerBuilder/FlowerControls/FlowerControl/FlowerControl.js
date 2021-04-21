import Button from "../../../UI/Button/Button";
import FlowerIngredient from "../../FlowerIngredient/FlowerIngredient";
import classes from "./FlowerControl.module.css";

const  FlowerControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.FlowerControl}>
        <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        < FlowerIngredient type={type} fixed />
        </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default  FlowerControl;
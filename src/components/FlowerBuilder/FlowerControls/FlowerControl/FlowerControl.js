import FlowerIngredient from "../../FlowerIngredient/FlowerIngredient";
import classes from "./FlowerControl.module.css";

const  FlowerControl = ({ type, add, remove }) => {
  return (
    <div className={classes. FlowerControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.ingredient}>
        < FlowerIngredient type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default  FlowerControl;
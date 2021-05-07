import Button from "../../../UI/Button/Button";
import FlowerIngredient from "../../FlowerIngredient/FlowerIngredient";
import classes from "./FlowerControl.module.css";
import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/builder";

const  FlowerControl = ({ type, count }) => {
const dispatch = useDispatch();
  return (
    <div className={classes.FlowerControl}>
         <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        < FlowerIngredient type={type} fixed />
        </div>
        <Button onClick={() => dispatch(remove(type))}>-</Button>
    </div>
  );
}

export default  FlowerControl;
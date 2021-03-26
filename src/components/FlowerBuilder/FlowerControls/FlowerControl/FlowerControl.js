import classes from "./FlowerControl.module.css";

const FlowerControl = ({ type, addIngredient, removeIngredient }) => {
    return ( 
        <div className = {classes.FlowerControl}>
            <button onClick={()=> addIngredient(type)} >-</button>
            <FlowerIngredient type={type}/>
            <button  onClick={()=> removeIngredient(type)} >+</button>
        </div>
    );
}
 
export default FlowerControl;


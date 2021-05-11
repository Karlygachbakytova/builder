import Button from "../../UI/Button/Button"
import FlowerControl from "./FlowerControl/FlowerControl"
import classes from "./Flowercontrols.module.css"

const FlowerControls = ({
    ingredients,
    startOrdering
}) => {
    const results = [];
    let total = 0;
    for (const ingredient in ingredients) {
         // Add ingredient number to totals number
    total += ingredients[ingredient];
    // Render pizza control for this ingredient
    results.push(<FlowerControl
        key={ingredient}
        count={ingredients[ingredient]}
        type={ingredient} />)   
    }
    return (     <div className={classes.FlowerControls}>
        <strong>Ingredients</strong>
        {results}
        <Button disabled={!total} onClick={startOrdering}>Order</Button>
        </div>
    );
    } 

 
export default FlowerControls;
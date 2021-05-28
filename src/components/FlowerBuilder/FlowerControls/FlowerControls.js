import Button from "../../UI/Button/Button"
import FlowerControl from "./FlowerControl/FlowerControl"
import classes from "./FlowerControls.module.css"

const FlowerControls = ({
    ingredients,
    startOrdering
}) => {
    const results = [];
    let total = 0;
    for (const ingredient in ingredients) {
    total += ingredients[ingredient];

    results.push(<FlowerControl
        key={ingredient}
        count={ingredients[ingredient]}
        type={ingredient} />)   
    }
    return (
        <div className={classes.FlowerControls}>
          <strong>Flowers</strong>
          {results}
          <Button disabled={!total} onClick={startOrdering}>Order</Button>
        </div>
      );
    } 

 
export default FlowerControls;
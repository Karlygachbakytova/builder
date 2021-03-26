import classes from "./FlowerControls.module.css"

const FlowerControls = ({ingredients}) => {
const results =[];
for (const ingredient in ingredients) {
   result.push(ingredient)
    }
}

    return ( 
        <div className={classes.FlowerControls}>{results} </div>
     );
}
 
export default FlowerControls;
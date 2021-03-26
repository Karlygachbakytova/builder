import classes from "./FlowerControls.module.css"
import FlowerControl from "./FlowerControl/FlowerControl"

const FlowerControls = ({ingredients}) => {
const results =[];
for (const ingredient in ingredients) {
   result.push(<FlowerControl type ={ingredient}/>)
    }


    return ( 
        <div className={classes.FlowerControls}>{results} </div>
     );
}
 
export default FlowerControls;
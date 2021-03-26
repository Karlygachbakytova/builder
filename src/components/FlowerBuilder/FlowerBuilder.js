                                                                                                                                                                                        import classes from "*.module.css";
import classes from "./FlowerBuilder.module.css"
import FlowerPreview from "./FlowerPreview/FlowerPreview";
import FlowerControls from "./FlowerControls/FlowerControls";
import {useState} from "react"




const FlowerBuilder = () => {
    const [ingredients, setIngredients] = useState( {
        rose:1,
        pions:2,
    });

    function addIngredient(type){
        const newIngredients = { ...ingredients};
        newIngredients[type]++;
        setIngredients(newIngredients);
    }

    function removeIngredient(type){
        const newIngredients = { ...ingredients};
        newIngredients[type]++;
        setIngredients(newIngredients);
    }

  


    return ( 
        <div className = {classes.FlowerBuilder}>
            <FlowerPreview ingredients={ingredients}/>
            <FlowerControls ingredients={ingredients}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}/>
        </div>
     );
}
 
export default FlowerBuilder;
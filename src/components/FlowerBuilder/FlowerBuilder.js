import FlowerPreview from "./FlowerPreview/FlowerPreview";
import FlowerControls from "./FlowerControls/FlowerControls";

import classes from "./FlowerBuilder.module.css";
import { useState } from "react";
import axios from "axios";

const FlowerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    rose: 1,
    lily: 1,
   orchid: 1,
   chamomile: 1,
   chrysanthemum: 1,
   
  });

useEffect (() => {
    axios.get('https://builder-fd7e5-default-rtdb.firebaseio.com/ingredients.json')
    .then ((response) => {
        console.log(response);
    })
})

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setIngredients(newIngredients);
  }

  return (
    <div className={classes.FlowerBuilder}>
      <FlowerPreview ingredients={ingredients} />
      <FlowerControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default FlowerBuilder;
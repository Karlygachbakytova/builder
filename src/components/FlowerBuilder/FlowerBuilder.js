import FlowerPreview from "./FlowerPreview/FlowerPreview";
import FlowerControls from "./FlowerControls/FlowerControls";

import classes from "./FlowerBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const FlowerBuilder = () => {
    const prices = {
        rose: 75,
        lily: 50,
        orchid: 40,
        chamomile: 15,
        chrysanthemum: 35,
      };
      const [ingredients, setIngredients] = useState({
        rose: 3,
        lily: 3,
        orchid: 3,
        chamomile: 3,
        chrysanthemum: 3,
      });
      const [ingredients, setIngredients] = useState({});
      const [price, setPrice] = useState(0);

useEffect (() =>
    axios.get('https://builder-fd7e5-default-rtdb.firebaseio.com/ingredients.json')
    .then(response => {
        setPrice(response.data.price);
        setIngredients(response.data.ingredients);
      })
  );

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  return (
    <div className={classes.FlowerBuilder}>
      <FlowerPreview
        ingredients={ingredients}
        price={price} />
      <FlowerControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default FlowerBuilder;
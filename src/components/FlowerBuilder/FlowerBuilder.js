import FlowerPreview from "./FlowerPreview/FlowerPreview";
import FlowerControls from "./FlowerControls/FlowerControls";

import classes from "./FlowerBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";

const FlowerBuilder = () => {
    const prices = {
        rose: 75,
        lily: 50,
        orchid: 40,
        chamomile: 15,
        chrysanthemum: 35,
        bromeliad: 45,
      };
    
      const [ingredients, setIngredients] = useState({});
      const [price, setPrice] = useState(0);
      const [ordering, setOrdering] = useState(false);

      useEffect(loadDefaults, []);
    
      function loadDefaults() {
        axios
          .get('https://builder-fd7e5-default-rtdb.firebaseio.com/default.json')
          .then(response => {
            setPrice(response.data.price);
            setIngredients(response.data.ingredients);
          });
      }

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

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }
  function finishOrdering() {
    setOrdering(false);
    axios
      .post('https://builder-fd7e5-default-rtdb.firebaseio.com/default.json', {
        ingredients: ingredients,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        loadDefaults();
      });
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
        startOrdering={startOrdering}
        />
     <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            />
             <Button onClick={finishOrdering} green>Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default FlowerBuilder;
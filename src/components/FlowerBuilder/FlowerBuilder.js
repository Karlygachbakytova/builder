import FlowerPreview from "./FlowerPreview/FlowerPreview";
import FlowerControls from "./FlowerControls/FlowerControls";

import classes from "./FlowerBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "../../axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";

const FlowerBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.builder.ingredients);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);

      useEffect(() => dispatch(load()), [ dispatch ]);
      
    
      // function loadDefaults() {
      //   axios
      //     .get('https://builder-fd7e5-default-rtdb.firebaseio.com/default.json')
      //     .then(response => {
      //       setPrice(response.data.price);
      //       setIngredients(response.data.ingredients);
      //     });
      // }
  //       // For arrays
  //       // setIngredients(Object.values(response.data.ingredients));
  //       // For objects
  //       setIngredients(response.data.ingredients);
  //     });
  // }


  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    // loadDefaults();
    history.push('/checkout');
  }


  return (
    <div className={classes.FlowerBuilder}>
      <FlowerPreview
        ingredients={ingredients}
        price={price} />
      <FlowerControls
        ingredients={ingredients}
        startOrdering={startOrdering}
        />
     <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            ingredients={ingredients}
            price={price}
            />
             <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}

export default withAxios(FlowerBuilder, axios);
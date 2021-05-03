import FlowerPreview from "../FlowerBuilder/FlowerPreview/FlowerPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import axios from "axios";
import classes from "./Checkout.module.css"

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('https://builder-fd7e5-default-rtdb.firebaseio.com/default/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      ingredients: {
        rose: 10,
        chamomile: 10,
        bromeliad: 10,
        orchid: 10,
        chrysanthemum: 10,
        lily: 10,
      },
      price: 100,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

    return (
      <div className={classes.Checkout}>
        <FlowerPreview ingredients={{
          rose: 5, 
         orchid: 10,
         chamomile: 50,
        }} price={1500} />
        <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback} />
      </div>
    );
  }
  
  export default Checkout; 
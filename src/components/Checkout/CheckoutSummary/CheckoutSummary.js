import classes from "./CheckoutSummary.module.css";
import FlowerPreview from "../../FlowerBuilder/FlowerPreview/FlowerPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = () => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <FlowerPreview ingredients={{
          rose: 5, 
         orchid: 10,
         chamomile: 50,
        }} price={1500} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button>Cancel</Button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
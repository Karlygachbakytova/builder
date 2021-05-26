import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients, price }) => {
  const outputIngredients = Object.keys(ingredients)
    .map(ingredient => <em key={ingredient}>{ingredient} - {ingredients[ingredient]}</em>);

  return (
    <div className={classes.Order}>
     <div>
        <span className={classes.strong}>Name:</span> {name}
        <br/>
        <span className={classes.strong}>Phone: </span>{phone} 
        <br/>
        <span className={classes.strong}>Address: </span>{address} 
      </div>
      <div><span className={classes.strong}>Orders:</span><div> {outputIngredients}</div></div>
      <strong><span className={classes.strong}>Price:</span></strong>{price}
    </div>
  );
}

export default Order;
  
import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../actions/types";

const initialState = {
  ingredients: {
  },
  price: 200,
};
const prices = {
  bromeliad: 3,
  chamomile: 3,
  chrysanthemum: .3,
  lily: .3,
  orchid: 3,
  rose: 3,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_INGREDIENT:
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
    case SET_INGREDIENTS:
      newState.ingredients = action.data.ingredients;
      newState.price = action.data.price;
      break;
  
    default:
      break;
  }

  return newState;
}

export default builder;


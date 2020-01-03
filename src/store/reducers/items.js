import * as actionTypes from "../actions/actionsTypes";
// import { updateObject } from "../../helpers/utility";

const initialState = {
  items: []
};

const addItem = (state, action) => {
  let index = -1;
  const item = state.items.filter((el, i) => {
    if (el.title === action.item.title) {
      index = i;
      return true;
    }
    return false;
  });

  let tempItems = [...state.items];

  if (item && item.length > 0) {
    tempItems[index] = {
      ...tempItems[index],
      qty: tempItems[index].qty + 1
    };
    return { items: [...tempItems] };
  }
  return { items: [...state.items, { ...action.item }] };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return addItem(state, action);
    default:
      return state;
  }
};

export default reducer;

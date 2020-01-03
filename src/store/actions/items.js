import * as actionTypes from "./actionsTypes";

export const addItem = item => {
  return {
    type: actionTypes.ADD_ITEM,
    item: item
  };
};

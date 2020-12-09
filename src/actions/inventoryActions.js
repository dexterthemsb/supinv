import _ from "lodash";

import { UPDATE_INVENTORY } from "./actions";

// add supplier
export const addToInventory = item => (dispatch, getState) => {
  const inventory = getState().inventory;

  dispatch({
    type: UPDATE_INVENTORY,
    payload: {
      inventory: [...inventory, item]
    }
  });
};

// edit item details
export const editItemDetails = item => (dispatch, getState) => {
  const inventory = [...getState().inventory];

  const index = _.findIndex(inventory, i => i.id === item.id);

  inventory[index] = item;

  dispatch({
    type: UPDATE_INVENTORY,
    payload: {
      inventory
    }
  });
};

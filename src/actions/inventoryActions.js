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

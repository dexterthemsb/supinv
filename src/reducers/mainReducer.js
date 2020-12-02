import { UPDATE_INVENTORY, UPDATE_SUPPLIER } from "../actions/actions";

import data from "../data.json";

const initState = {
  suppliers: data.suppliers,
  inventory: data.inventory
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_SUPPLIER:
      // eslint-disable-next-line
      var { suppliers } = action.payload;

      state = {
        ...state,
        suppliers
      };

      break;

    case UPDATE_INVENTORY:
      // eslint-disable-next-line
      var { inventory } = action.payload;

      state = {
        ...state,
        inventory
      };

      break;

    default:
      return state;
  }

  return state;
};

export default mainReducer;

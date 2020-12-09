import _ from "lodash";

import { UPDATE_SUPPLIER } from "./actions";

// add supplier
export const addSupplier = supplier => (dispatch, getState) => {
  const suppliers = getState().suppliers;

  dispatch({
    type: UPDATE_SUPPLIER,
    payload: {
      suppliers: [...suppliers, supplier]
    }
  });
};

// edit supplier details
export const editSupplierDetails = supplier => (dispatch, getState) => {
  const suppliers = [...getState().suppliers];

  const index = _.findIndex(suppliers, sup => sup.id === supplier.id);

  suppliers[index] = supplier;

  dispatch({
    type: UPDATE_SUPPLIER,
    payload: {
      suppliers
    }
  });
};

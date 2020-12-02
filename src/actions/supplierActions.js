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

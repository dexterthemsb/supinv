import data from "../data.json";

export const getAllSuppliers = () => {
  return data.suppliers;
};

export const getAllItems = () => {
  return data.inventory;
};

export const getAllWarehouses = () => {
  return data.warehouse;
};

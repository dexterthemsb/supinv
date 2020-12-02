import data from "../data.json";

export const getAllSuppliers = () => {
  return data.suppliers.reduce((arr, supplier) => {
    const inventory = data.inventory.filter(item => supplier.id === item.supplier_id);
    return [...arr, { ...supplier, count: inventory.length }];
  }, []);
};

export const getAllItems = () => {
  return data.inventory;
};

export const getAllWarehouses = () => {
  return data.warehouse;
};

export const getSupplier = supplierID => {
  const supplierDetails = data.suppliers.filter(supplier => supplierID === supplier.id)[0];
  const inventory = data.inventory.filter(item => supplierID === item.supplier_id);

  if (supplierDetails) return { supplierDetails, inventory };

  return null;
};

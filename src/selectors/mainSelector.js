// get all suppliers
export const getAllSuppliers = state => {
  return state.suppliers.reduce((arr, supplier) => {
    const inventory = state.inventory.filter(item => supplier.id === item.supplier_id);
    return [...arr, { ...supplier, count: inventory.length }];
  }, []);
};

// get inventory
export const getInventory = (state, supplierID) => {
  return state.inventory.filter(item => item.supplier_id === supplierID);
};

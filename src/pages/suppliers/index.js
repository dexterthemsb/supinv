import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import { getAllSuppliers } from "../../utils/data";

const Suppliers = () => {
  // state
  const [openDialog, setOpenDialog] = useState(false);
  const [suppliers, setSuppliers] = useState(getAllSuppliers());

  return (
    <div className="px-8 py-16">
      <div className="mb-8 flex flex-row items-center justify-between">
        <p className="text-4xl font-bold text-gray-900">Suppliers</p>

        <Button variant="outlined" onClick={() => setOpenDialog(true)}>
          Add a Supplier
        </Button>
      </div>

      <div className="suppliers-list">
        {suppliers.length &&
          suppliers.map(supplier => (
            <div key={supplier.id} className="mb-4 ">
              <p>{supplier.name}</p>
              <p>{supplier.address}</p>
              <p>{supplier.contact_person}</p>
              <p>{supplier.email}</p>
              <p>{supplier.mobile}</p>
              <Link
                className="hover:text-yellow-700 text-yellow-600"
                to={`/supplier/${supplier.id}`}
              >
                View Inventory
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Suppliers;

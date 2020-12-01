import { useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "@material-ui/core";

import { getSupplier } from "../../utils/data";

const Inventory = () => {
  // hooked
  const { supplierID } = useParams();

  // state
  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState(getSupplier(supplierID));

  return (
    <div className="px-8 py-16">
      <div className="mb-8 flex flex-row items-center justify-between">
        <p className="text-4xl font-bold text-gray-900">{data.supplierDetails.name}</p>

        <Button variant="outlined" onClick={() => setOpenDialog(true)}>
          Add an Item
        </Button>
      </div>

      <div className="inventory-list">
        {data.inventory.length &&
          data.inventory.map(item => (
            <div key={item.id} className="mb-4 ">
              <p>{item.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Inventory;

import { useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "@material-ui/core";

import { getSupplier } from "../../utils/data";
import ItemCard from "../../components/itemCard/itemCard";

const Inventory = () => {
  // hooked
  const { supplierID } = useParams();

  // state
  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState(getSupplier(supplierID));

  return (
    <div className="px-8 sm:py-16 py-8">
      <div className="mb-8 flex flex-row items-center justify-between">
        <p className="text-2xl font-bold text-gray-900">{data.supplierDetails.name}</p>

        <Button variant="outlined" onClick={() => setOpenDialog(true)}>
          Add an Item
        </Button>
      </div>

      <div className="suppliers-list">
        {data.inventory.length &&
          data.inventory.map(item => <ItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Inventory;

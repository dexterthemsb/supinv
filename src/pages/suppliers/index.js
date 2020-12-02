import { useState } from "react";

import { Button, IconButton } from "@material-ui/core";
import { Plus } from "react-feather";

import SupplierCard from "../../components/supplierCard/supplierCard";
import SupplierForm from "../../components/supplierForm/supplierForm";
import CustomAlert from "../../components/customAlert/customAlert";

import { getAllSuppliers } from "../../utils/data";
import { useWindowSize } from "../../utils/hooks";

const Suppliers = () => {
  // hooked
  const { windowWidth } = useWindowSize();

  // state
  const [openDialog, setOpenDialog] = useState(false);
  const [suppliers, setSuppliers] = useState(getAllSuppliers());
  const [success, setSuccess] = useState("");

  // handle add suppliers
  const handleAddSuppliers = data => {
    setSuppliers([...suppliers, data]);

    setSuccess("Entry added successfully.");
  };

  return (
    <>
      <div className="px-8 sm:py-16 py-8">
        <div className="mb-8 flex flex-row items-center justify-between">
          <p className="text-3xl font-bold text-gray-900">Suppliers</p>

          {windowWidth <= 540 ? (
            <div className="bg-yellow-100 rounded-full">
              <IconButton color="primary" onClick={() => setOpenDialog(true)}>
                <Plus size={20} />
              </IconButton>
            </div>
          ) : (
            <Button
              disableElevation
              className="custom-button"
              variant="contained"
              color="primary"
              onClick={() => setOpenDialog(true)}
            >
              Add a Supplier
            </Button>
          )}
        </div>

        <div className="suppliers-list">
          {suppliers.length &&
            suppliers.map(supplier => <SupplierCard key={supplier.id} supplier={supplier} />)}
        </div>

        <SupplierForm open={openDialog} setOpen={setOpenDialog} submit={handleAddSuppliers} />
      </div>

      {/* success */}
      <CustomAlert msg={success} setMsg={setSuccess} severity="success" />
    </>
  );
};

export default Suppliers;

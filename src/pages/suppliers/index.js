import { useState } from "react";
import { connect } from "react-redux";

import { Button, IconButton } from "@material-ui/core";
import { Plus } from "react-feather";

import SupplierCard from "../../components/supplierCard/supplierCard";
import SupplierForm from "../../components/supplierForm/supplierForm";

import { useWindowSize } from "../../utils/hooks";

import { getAllSuppliers } from "../../selectors/mainSelector";

const Suppliers = props => {
  // hooked
  const { windowWidth } = useWindowSize();

  // state
  const [openDialog, setOpenDialog] = useState(false);
  const [editSupplier, setEditSupplier] = useState(null);

  // handle edit supplier
  const handleOpenCloseDialog = data => {
    setEditSupplier(data);
    setOpenDialog(!openDialog);
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
          {props.suppliers.length &&
            props.suppliers.map(supplier => (
              <SupplierCard
                key={supplier.id}
                supplier={supplier}
                handleOpenCloseDialog={handleOpenCloseDialog}
              />
            ))}
        </div>

        <SupplierForm
          open={openDialog}
          handleOpenCloseDialog={handleOpenCloseDialog}
          editSupplier={editSupplier}
        />
      </div>
    </>
  );
};

// map state to props
const mapStateToProps = state => {
  return {
    suppliers: getAllSuppliers(state)
  };
};

export default connect(mapStateToProps, null)(Suppliers);

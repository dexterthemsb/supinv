import { useState } from "react";
import { connect } from "react-redux";
import { useParams, withRouter } from "react-router-dom";

import { Button, IconButton } from "@material-ui/core";
import { Plus } from "react-feather";

import ItemCard from "../../components/itemCard/itemCard";
import ItemForm from "../../components/itemForm/itemForm";

import { useWindowSize } from "../../utils/hooks";

import { getInventory } from "../../selectors/mainSelector";
import { addToInventory } from "../../actions/inventoryActions";

const Inventory = props => {
  // hooked
  const { supplierID } = useParams();
  const { windowWidth } = useWindowSize();

  // state
  const [openDialog, setOpenDialog] = useState(false);

  // handle add items
  const handleAddItems = item => {
    props.addToInventory({ ...item, supplier_id: supplierID });
  };

  return (
    <>
      <div className="px-8 sm:py-16 py-8">
        <div className="mb-8 flex flex-row items-center justify-between">
          <p className="text-3xl font-bold text-gray-900">Inventory</p>

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
              Add an Item
            </Button>
          )}
        </div>

        <div className="suppliers-list">
          {props.inventory.length &&
            props.inventory.map(item => <ItemCard key={item.id} item={item} />)}
        </div>

        <ItemForm open={openDialog} setOpen={setOpenDialog} submit={handleAddItems} />
      </div>
    </>
  );
};

// map state to props
const mapStateToProps = (state, ownProps) => {
  return {
    inventory: getInventory(state, ownProps.match.params.supplierID)
  };
};

// map dispatch to props
const mapDispatchToProps = {
  addToInventory
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Inventory));

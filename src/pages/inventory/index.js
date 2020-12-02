import { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Button } from "@material-ui/core";

import ItemCard from "../../components/itemCard/itemCard";

import { getInventory } from "../../selectors/mainSelector";

const Inventory = props => {
  // state
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <div className="px-8 sm:py-16 py-8">
        <div className="mb-8 flex sm:flex-row sm:items-center sm:justify-between">
          <p className="text-3xl font-bold text-gray-900">Inventory</p>

          <Button
            disableElevation
            className="custom-button"
            variant="contained"
            color="primary"
            onClick={() => setOpenDialog(true)}
          >
            Add an Item
          </Button>
        </div>

        <div className="suppliers-list">
          {props.inventory.length &&
            props.inventory.map(item => <ItemCard key={item.id} item={item} />)}
        </div>
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

export default withRouter(connect(mapStateToProps, null)(Inventory));

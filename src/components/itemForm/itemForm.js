import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  Slide,
  TextField
} from "@material-ui/core";

import DialogHeader from "../dialogHeader/dialogHeader";
import CustomAlert from "../customAlert/customAlert";

import { useWindowSize } from "../../utils/hooks";

import { addToInventory, editItemDetails } from "../../actions/inventoryActions";

// slide transition
const SlideTransition = props => {
  return <Slide {...props} direction="up" />;
};

// grow transition
const GrowTransition = props => {
  return <Grow {...props} />;
};

// default object
const initObj = {
  name: "",
  category: "",
  description: "",
  batch_id: "",
  warehouse_id: "",
  qty: "",
  units: "",
  image: ""
};

const ItemForm = props => {
  // hooked
  const { windowWidth } = useWindowSize();

  // state
  const [item, setItem] = useState({ ...initObj, ...props.editItem });
  const [error, setError] = useState("");

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();

    const { name, category, description, batch_id, warehouse_id, qty, units } = item;

    if (!name || !category || !description || !batch_id || !warehouse_id) {
      setError("Please enter mandatory fields.");
      return;
    }

    if (qty < 0 || units < 0) {
      setError("Quantity & Units should be a valid number.");
      return;
    }

    // check the mode (edit / add) based on editItem prop
    if (!props.editItem) {
      props.addToInventory({
        ...item,
        id: uuidv4(),
        supplier_id: props.supplierID,
        prod_date: Date.now()
      });
    } else {
      props.editItemDetails(item);
    }

    setItem({ ...initObj });

    props.handleOpenCloseDialog(null);
  };

  // handle change item details
  const handleChangeItemDetails = (field, value) => {
    setItem({ ...item, [field]: value });
  };

  useEffect(() => {
    setItem({ ...props.editItem });
  }, [props.editItem]);

  return (
    <>
      <Dialog
        open={props.open}
        maxWidth="sm"
        fullScreen={windowWidth <= 540}
        TransitionComponent={windowWidth <= 540 ? SlideTransition : GrowTransition}
      >
        <DialogTitle className="dialog-header">
          <DialogHeader
            title={props.editItem ? "Edit Item" : "Add an Item"}
            close={() => {
              setItem({ ...initObj });
              props.handleOpenCloseDialog(false);
            }}
          />
        </DialogTitle>

        <form>
          <DialogContent className="dialog-content">
            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Item Name"
              name="name"
              value={item.name}
              onChange={e => handleChangeItemDetails(e.target.name, e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Category"
              name="category"
              value={item.category}
              onChange={e => handleChangeItemDetails(e.target.name, e.target.value)}
            />

            <TextField
              fullWidth
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Image URL"
              name="image"
              value={item.image}
              onChange={e => handleChangeItemDetails(e.target.name, e.target.value)}
            />

            <div className="form-row-2">
              <TextField
                fullWidth
                className="custom-textfield form-fields border-gray-100"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                label="Quantity in Stock"
                type="number"
                name="qty"
                value={item.qty}
                onChange={e => handleChangeItemDetails(e.target.name, e.target.value)}
              />

              <TextField
                fullWidth
                className="custom-textfield form-fields border-gray-100"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                label="Units"
                type="number"
                name="units"
                value={item.units}
                onChange={e => handleChangeItemDetails(e.target.name, e.target.value)}
              />
            </div>

            <TextField
              fullWidth
              required
              multiline
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Description"
              name="description"
              value={item.description}
              onChange={e => handleChangeItemDetails(e.target.name, e.target.value)}
            />

            <div className="form-row-2">
              <TextField
                fullWidth
                required
                className="custom-textfield form-fields border-gray-100"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                label="Batch ID"
                name="batch_id"
                value={item.batch_id}
                onChange={e => handleChangeItemDetails(e.target.name, e.target.value)}
              />

              <TextField
                fullWidth
                required
                className="custom-textfield form-fields border-gray-100"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                label="Warehouse ID"
                name="warehouse_id"
                value={item.warehouse_id}
                onChange={e => handleChangeItemDetails(e.target.name, e.target.value)}
              />
            </div>
          </DialogContent>

          <DialogActions className="dialog-actions">
            <Button
              fullWidth
              disableElevation
              className="custom-button button-submit"
              variant="contained"
              color="primary"
              type="submit"
              style={{ margin: "-25px 0 0 0" }}
              onClick={e => handleSubmit(e)}
            >
              Save details
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* error */}
      <CustomAlert msg={error} setMsg={setError} severity="error" />
    </>
  );
};

// map dispatch to props
const mapDispatchToProps = {
  addToInventory,
  editItemDetails
};

export default connect(null, mapDispatchToProps)(ItemForm);

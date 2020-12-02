import { useState } from "react";
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

// slide transition
const SlideTransition = props => {
  return <Slide {...props} direction="up" />;
};

// grow transition
const GrowTransition = props => {
  return <Grow {...props} />;
};

const ItemForm = props => {
  // hooked
  const { windowWidth } = useWindowSize();

  // state
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [batchID, setBatchID] = useState("");
  const [warehouseID, setWarehouseID] = useState("");
  const [qty, setQty] = useState("");
  const [units, setUnits] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleAddSupplier = e => {
    e.preventDefault();

    if (!name || !category || !desc || !batchID || !warehouseID || !image) {
      setError("Please mandatory fields.");
      return;
    }

    if (qty < 0 || units < 0) {
      setError("Quantity & Units should be greater than 0.");
      return;
    }

    props.submit({
      name,
      id: uuidv4(),
      category,
      description: desc,
      batch_id: batchID,
      warehouse_id: warehouseID,
      qty,
      units,
      prod_date: Date.now(),
      image
    });

    props.setOpen(false);
  };

  return (
    <>
      <Dialog
        open={props.open}
        maxWidth="sm"
        fullScreen={windowWidth <= 540}
        TransitionComponent={windowWidth <= 540 ? SlideTransition : GrowTransition}
      >
        <DialogTitle className="dialog-header">
          <DialogHeader title="Add an Supplier" close={() => props.setOpen(false)} />
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
              onChange={e => setName(e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Category"
              onChange={e => setCategory(e.target.value)}
            />

            <TextField
              fullWidth
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Image URL"
              onChange={e => setImage(e.target.value)}
            />

            <div className="form-row-2">
              <TextField
                fullWidth
                className="custom-textfield form-fields border-gray-100"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                label="Quantity in Stock"
                type="number"
                onChange={e => setQty(e.target.value)}
              />

              <TextField
                fullWidth
                className="custom-textfield form-fields border-gray-100"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                label="Units"
                type="number"
                onChange={e => setUnits(e.target.value)}
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
              onChange={e => setDesc(e.target.value)}
            />

            <div className="form-row-2">
              <TextField
                fullWidth
                required
                className="custom-textfield form-fields border-gray-100"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                label="Batch ID"
                onChange={e => setBatchID(e.target.value)}
              />

              <TextField
                fullWidth
                required
                className="custom-textfield form-fields border-gray-100"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                label="Warehouse ID"
                onChange={e => setWarehouseID(e.target.value)}
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
              onClick={e => handleAddSupplier(e)}
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

export default ItemForm;

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

const SupplierForm = props => {
  // hooked
  const { windowWidth } = useWindowSize();

  // state
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const handleAddSupplier = e => {
    e.preventDefault();

    if (!name || !address || !contactPerson || !email || !mobile) {
      setError("Please mandatory fields.");
      return;
    }

    props.submit({
      name,
      id: uuidv4(),
      address,
      contact_person: contactPerson,
      email,
      mobile,
      reg_date: Date.now()
    });

    props.setOpen(false);
  };

  return (
    <>
      <Dialog
        open={props.open}
        maxWidth="xs"
        fullScreen={windowWidth <= 540}
        TransitionComponent={windowWidth <= 540 ? SlideTransition : GrowTransition}
      >
        <DialogTitle className="dialog-header">
          <DialogHeader title="Add a Supplier" close={() => props.setOpen(false)} />
        </DialogTitle>

        <form>
          <DialogContent className="dialog-content">
            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Supplier Name"
              onChange={e => setName(e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Address"
              onChange={e => setAddress(e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Contact Person"
              onChange={e => setContactPerson(e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Email"
              onChange={e => setEmail(e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Mobile"
              onChange={e => setMobile(e.target.value)}
            />
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

export default SupplierForm;

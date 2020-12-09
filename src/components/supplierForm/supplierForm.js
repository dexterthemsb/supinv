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

import { addSupplier, editSupplierDetails } from "../../actions/supplierActions";

// slide transition
const SlideTransition = props => {
  return <Slide {...props} direction="up" />;
};

// grow transition
const GrowTransition = props => {
  return <Grow {...props} />;
};

// default obj
const initObj = {
  name: "",
  address: "",
  contact_person: "",
  email: "",
  mobile: ""
};

const SupplierForm = props => {
  // hooked
  const { windowWidth } = useWindowSize();

  // state
  const [supplier, setSupplier] = useState({ ...initObj, ...props.editSupplier });
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [contactPerson, setContactPerson] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  // handle change supplier details
  const handleChangeSupplierDetails = (field, value) => {
    setSupplier({ ...supplier, [field]: value });
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();

    const { name, address, contact_person, email, mobile } = supplier;

    if (!name || !address || !contact_person || !email || !mobile) {
      setError("Please enter mandatory fields.");
      return;
    }

    // check the mode (edit / add) based on editSupplier prop
    if (!props.editSupplier) {
      props.addSupplier({
        ...supplier,
        id: uuidv4(),
        reg_date: Date.now()
      });
    } else {
      props.editSupplierDetails(supplier);
    }

    setSupplier({ ...initObj });

    props.handleOpenCloseDialog(null);
  };

  useEffect(() => {
    setSupplier({ ...props.editSupplier });
  }, [props.editSupplier]);

  return (
    <>
      <Dialog
        open={props.open}
        maxWidth="xs"
        fullScreen={windowWidth <= 540}
        TransitionComponent={windowWidth <= 540 ? SlideTransition : GrowTransition}
      >
        <DialogTitle className="dialog-header">
          <DialogHeader
            title={props.editSupplier ? "Edit Supplier" : "Add a Supplier"}
            close={() => {
              setSupplier({ ...initObj });
              props.handleOpenCloseDialog(null);
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
              label="Supplier Name"
              name="name"
              value={supplier.name}
              onChange={e => handleChangeSupplierDetails(e.target.name, e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Address"
              name="address"
              value={supplier.address}
              onChange={e => handleChangeSupplierDetails(e.target.name, e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Contact Person"
              name="contact_person"
              value={supplier.contact_person}
              onChange={e => handleChangeSupplierDetails(e.target.name, e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Email"
              name="email"
              value={supplier.email}
              onChange={e => handleChangeSupplierDetails(e.target.name, e.target.value)}
            />

            <TextField
              fullWidth
              required
              className="custom-textfield form-fields border-gray-100"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              label="Mobile"
              name="mobile"
              value={supplier.mobile}
              onChange={e => handleChangeSupplierDetails(e.target.name, e.target.value)}
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
  addSupplier,
  editSupplierDetails
};

export default connect(null, mapDispatchToProps)(SupplierForm);

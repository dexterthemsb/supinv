import React, { useEffect, useState } from "react";

import "./main.scss";

import { Slide, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// slide transition
const SlideTransition = props => {
  return <Slide {...props} direction="up" />;
};

const CustomAlert = props => {
  // state
  const [msg, setMsg] = useState("");

  // use a separate msg state to prevent text from disappearing
  useEffect(() => {
    // update only when there is a message in the props
    if (props.msg) setMsg(props.msg);
  }, [props.msg]);

  return (
    <Snackbar
      className="custom"
      TransitionComponent={SlideTransition}
      open={!!props.msg}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={(_, reason) => reason === "timeout" && props.setMsg("")}
    >
      <Alert className={`custom-alert alert-${props.severity}`} severity={props.severity}>
        {msg}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;

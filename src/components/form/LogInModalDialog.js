import React from "react";
import LogInForm from "./LogInForm";

const LogInModalDialog = ({ props, handleClose }) => (
  <LogInForm handleClose={handleClose} props={props} />
);

export default LogInModalDialog;

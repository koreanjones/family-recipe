import React, { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import SignUpForm from "./SignUpForm";

const SignUpModalDialog = ({ props, handleClose }) => (
  <SignUpForm handleClose={handleClose} props={props} />
);

export default SignUpModalDialog;

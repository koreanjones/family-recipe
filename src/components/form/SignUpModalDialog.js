import React from "react";
import Dialog from "@material-ui/core/Dialog";
import SignUpForm from './SignUpForm'

const SignUpModalDialog = ({ props, open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <SignUpForm handleClose={handleClose} props={props} />
    </Dialog>
  );
};

export default SignUpModalDialog;

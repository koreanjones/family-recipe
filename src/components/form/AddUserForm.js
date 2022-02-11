import React from "react";
import { useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import UserForm from "./UserForm";

const UserModalDialog = ({ open, handleClose }) => {
 
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <UserForm handleClose={handleClose} />
    </Dialog>
  );
};

export default UserModalDialog;

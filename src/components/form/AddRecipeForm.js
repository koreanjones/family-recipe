import React from "react";
import Dialog from "@material-ui/core/Dialog";
import RecipeForm from "./RecipeForm";

const RecipeModalDialog = ({props, open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <RecipeForm handleClose={handleClose} props={props} />
    </Dialog>
  );
};

export default RecipeModalDialog;

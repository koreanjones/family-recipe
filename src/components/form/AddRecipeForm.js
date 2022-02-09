import React from "react";
import Dialog from "@material-ui/core/Dialog";
import RecipeForm from "./RecipeForm";

const RecipeModalDialog = ({ open, handleClose }) => {
  console.log(open, handleClose);
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <RecipeForm handleClose={handleClose} />
    </Dialog>
  );
};

export default RecipeModalDialog;

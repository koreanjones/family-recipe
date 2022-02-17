import React, { useEffect } from "react";
import LogInForm from "./LogInForm";

const LogInModalDialog = ({ props,  handleClose }) => {
console.log("porrprorrr",props)
  return (
    <div>
      <LogInForm handleClose={handleClose} props={props} />
    </div>
  );
};
//   return (
//     // props received from App.js
//     // <Dialog open={open} onClose={handleClose}>
//     //   <SignUpForm handleClose={handleClose} props={props} />
//     // </Dialog>
//   );;

export default LogInModalDialog;

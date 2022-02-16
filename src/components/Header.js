import React from 'react';
import PrimarySearchAppBar from './NavBar';
import Typography from "@mui/material/Typography";

const Header = (props) => {
  console.log(props)
  return (
    <>
      <PrimarySearchAppBar
        handleClose={props.handleClose}
        handleSignUpOpen={props.handleSignUpOpen}
        open={props.open}
      
      />
      <Typography variant="h3" sx={{
        marginBottom:'20px'
      }}>
        
      </Typography>
    </>
  );
};

export default Header;
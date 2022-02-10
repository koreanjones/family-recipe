import React from 'react';
import PrimarySearchAppBar from './NavBar';
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Typography>
        <h1>Recipes List</h1>
      </Typography>
    </>
  );
};

export default Header;
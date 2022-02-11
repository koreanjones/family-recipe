import React from 'react';
import PrimarySearchAppBar from './NavBar';
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Typography variant="h3">
        Recipe List
      </Typography>
    </>
  );
};

export default Header;
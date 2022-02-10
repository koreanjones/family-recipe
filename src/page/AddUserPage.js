import React from 'react'
import UserModalDialog from '../components/form/AddUserForm';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AddUserPage = (open) => {
  console.log(open)
  return (
    <div>
      <UserModalDialog open={open.open} handleClose={open.handleClose} />
      <Button variant="contained" onClick={open.handleOpen}>
        Add User
      </Button>
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
}

export default AddUserPage
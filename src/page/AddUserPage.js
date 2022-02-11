import React from 'react'
import UserModalDialog from '../components/form/AddUserForm';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AddUserPage = (props) => {
  console.log(props)
  return (
    <div>
      <UserModalDialog open={props.open} handleClose={props.handleClose} />
      <Button variant="contained" onClick={props.handleOpen}>
        Add User
      </Button>
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
}

export default AddUserPage
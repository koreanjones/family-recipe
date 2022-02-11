import React from 'react'
import RecipeModalDialog from '../components/form/AddRecipeForm';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AddRecipePage = (props) => {
  console.log('asdfasdfasdfas',props);
  return (
    <div>
      <RecipeModalDialog
        props={props}
        open={props.open}
        handleClose={props.handleClose}
      />
      {props.user === "" ? (
        console.log("no user")
      ) : (
        <>
          <Button variant="contained" onClick={props.handleOpen}>
            Update User
          </Button>
        </>
      )}
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
}

export default AddRecipePage
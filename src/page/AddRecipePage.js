import React from 'react'
import RecipeModalDialog from '../components/form/AddRecipeForm';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AddRecipePage = (open) => {
  return (
    <div>
      <RecipeModalDialog
        open={open.recipeOpen}
        handleClose={open.handleClose}
      />

      <Button variant="contained" onClick={open.handleRecipeOpen}>
        Add Recipe
      </Button>
      <Link to="/">
        <Button variant="contained">Back</Button>
      </Link>
    </div>
  );
}

export default AddRecipePage
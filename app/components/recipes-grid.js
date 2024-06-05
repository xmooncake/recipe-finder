import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Pagination } from '@mui/material'; // assuming you're using Material-UI
import RecipeCard from './recipe-card';

const RecipesGrid = ({ recipes }) => {

  return (
    <>
    
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '20px',
    }}>
      <Grid container spacing={4}>
        {recipes.map((recipe, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index} >
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
      

      </div>
      
      
      </>
  );
};

RecipesGrid.propTypes = {
  recipes: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default RecipesGrid;

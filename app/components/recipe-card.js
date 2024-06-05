import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

function RecipeCard({ recipe }) {
  return (
    
    <Card sx={{height: 600}}>
      <CardMedia
        component="img"
        height="140"
        
        image={recipe['image']}
        alt={recipe.label || 'No title'}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {recipe.label || 'No title'}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 1 }}/>
        <Typography variant="body2" color="text.secondary">
          {recipe.ingredientLines.join(', ') || 'No ingredients'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default RecipeCard;

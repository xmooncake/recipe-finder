import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function RecipeCard({  }) {
    return (
        // <div
        //     style={{
        //         display: "flex",
        //         justifyContent: "center",  // Center horizontally
        //         flexDirection: "column",
        //         width: "50%",
        //         padding: 20,
        //         margin: "0 auto",  // Center horizontally within its parent
        //     }}
        // >
            <Card>
                <CardContent>
                    <Typography variant="h6">{'Title'}</Typography>
                    <Typography variant="body1">{'Description'}</Typography>
                    <Typography variant="body2">Ingredients: {'Ingredients'}</Typography>
                    <Typography variant="body2">Instructions: {'Instructions'}</Typography>
                </CardContent>
            </Card>
        // </div>
    );    
}
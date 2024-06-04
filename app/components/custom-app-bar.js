import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function CustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar>
          
          <Typography variant="h6" align='center' component="div" sx={{ flexGrow: 1 }}>
            React Recipe Finder
            
            <br/>

          <Typography fontSize='.6em' color='#E0E0E0' component='div'>
            Find the best recipes for your next meal!
          </Typography>

          </Typography>
        

        </Toolbar>
      </AppBar>
    </Box>
  );
}
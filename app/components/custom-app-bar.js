import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Search } from '@mui/icons-material';
import { Box } from '@mui/material';


export default function CustomAppBar({ searchTerm, onSearchChange, onSearch, placeholder }) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  

  return (
      <AppBar position="static" sx={{backgroundColor: '#AAAAAA'}} >
        <Toolbar>
          
          <Typography variant="h6" align='left' component="div" sx={{ flexGrow: 1 }}>
            React Recipe Finder
            
            <br/>

          <Typography fontSize='.6em' color='#E0E0E0' component='div'>
            Find the best recipes for your next meal!
          </Typography>

          </Typography>
          
          
            <Box sx={{ display: 'flex', alignItems: 'flex-end', alignContent: 'center' }}>
            
            <Search sx={{color: '#2A2A2A', paddingBottom: .8, fontSize: 28}}/> 
            <TextField
              id="outlined-basic"
              width='200px'
              variant="standard"
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)}
              sx={{
                backgroundColor: '#FFFFFF', 
                borderRadius: 5, width: '200px', 
                paddingLeft: 1, 
                paddingRight: 1, 
                paddingTop: .3, 
                paddingBottom: .3,

              }}
              InputProps={{ disableUnderline: true, }}
              onKeyPress={handleKeyPress}
            />
            </Box>

            
        

        </Toolbar>
      </AppBar>
  );
}
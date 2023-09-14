import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CasinoTwoToneIcon from '@mui/icons-material/CasinoTwoTone';

export default function NavBarLogOut() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'maroon' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              color="inherit"
              component={Link}
              to="/Mgmt"
              sx={{
                fontSize: "30px",
                textTransform: "none",
                alignItems: 'center'
              }}>
              <CasinoTwoToneIcon sx={{ mr: 1 }} />
              Baldwin's Board Games
            </Button>
          </Box>
          <CasinoTwoToneIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ marginRight: "16px" }}>
            Inventory Manager
          </Typography>
          <CasinoTwoToneIcon sx={{ mr: 4 }} />
          <Button color="inherit" component={Link} to="/">Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

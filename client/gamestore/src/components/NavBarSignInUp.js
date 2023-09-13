import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './SignIn';
import CasinoTwoToneIcon from '@mui/icons-material/CasinoTwoTone';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'maroon' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
          <Button
              color="inherit"
              component={Link}
              to="/"
              sx={{
                fontSize: "30px",
                textTransform: "none",
                alignItems: 'center'
              }}>
              <CasinoTwoToneIcon sx={{ mr: 1 }} />Baldwin's Board Games
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

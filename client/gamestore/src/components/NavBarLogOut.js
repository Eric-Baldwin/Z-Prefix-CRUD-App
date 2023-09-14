import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SignIn from './SignIn';
import CasinoTwoToneIcon from '@mui/icons-material/CasinoTwoTone';

export default function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hypothetically clearing JWT token or user session data
    localStorage.removeItem('token');

    // Redirecting to the home page or any other page after logout
    navigate('/');
  };

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
          <Button color="inherit" onClick={handleLogout}>Log Out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

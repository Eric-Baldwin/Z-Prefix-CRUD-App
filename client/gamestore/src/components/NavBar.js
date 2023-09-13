import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignInSide from './SignInSide';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/" sx={{ fontSize: "30px" }}>
              Baldwin's Game Store
            </Button>
          </Box>
          <Button color="inherit" component={Link} to="/sign-in">Sign-In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

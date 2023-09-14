import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { LockOutlined, CasinoTwoTone } from '@mui/icons-material';
import NavBarLogOut from './NavBarLogOut';
import { itemAPI } from '../api.js';

const defaultTheme = createTheme();

export default function NewGame() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const getLatestUserId = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      const data = await response.json();

      const latestUser = data.sort((a, b) => b.id - a.id)[0];

      return latestUser.id;
    } catch (error) {
      console.error("Failed fetching the latest user:", error.message);
      return null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!itemName || !description || !quantity) {
      alert('All fields must be filled out to create a game.');
      return;
    }

    const userId = await getLatestUserId();

    if (!userId) {
      alert('Failed to get the latest user. Please try again.');
      return;
    }

    const item = {
      item_name: itemName,
      description,
      quantity: parseInt(quantity),
      user_id: userId
    };

    try {
      const data = await itemAPI.create(item);
      console.log("Item creation successful:", data);
      navigate('/inventory-mgmt');
    } catch (error) {
      console.error("Item creation failed:", error.message);
    }
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBarLogOut />
      <Box component="main" sx={{ height: '69vh' }}>
        <Grid container>
          <Grid
            item
            md={7}
            lg={5}
            sx={{
              backgroundImage: 'url(https://www.theboardgamefamily.com/wp-content/uploads/2013/10/FFGEventsAbove.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <CasinoTwoTone />
              </Avatar>
              <Typography component="h1" variant="h5">
                Create a Game
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={(e) => setItemName(e.target.value)}
                      value={itemName}
                      autoComplete="game-name"
                      name="itemName"
                      required
                      fullWidth
                      id="itemName"
                      label="Game Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                      required
                      fullWidth
                      id="quantity"
                      label="Quantity (1 - 1000)"
                      name="quantity"
                      autoComplete="quantity"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      required
                      fullWidth
                      id="description"
                      label="Game Description"
                      name="description"
                      autoComplete="game-name"
                    />
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create Game
                  </Button>
                </Grid>
              </Box>
            </Box>
            <Box sx={{ bgcolor: 'background.paper', p: 4 }} component="footer">
              <Typography variant="h6" align="center" gutterBottom>
                Keep on Rollin'!
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
              >
                There are only three forms of high art: the symphony, the illustrated children’s book and the board game. – Brian K. Vaughan.
              </Typography>
              <Copyright />
            </Box>
          </Container>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ color: 'Blue', textDecoration: 'underline' }}>
        Baldwin's Board Games
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

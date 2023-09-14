import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBarLogOut from './NavBarLogOut';
import { useState } from 'react';
import { itemAPI } from '../api.js';
import CasinoTwoToneIcon from '@mui/icons-material/CasinoTwoTone';

const defaultTheme = createTheme();

export default function NewGame() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const item = {
      itemName,
      description,
      quantity
    };

    try {
      const data = await itemAPI.create(item);
      console.log("Item creation successful:", data);
    } catch (error) {
      console.error("Item creation failed:", error.message);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBarLogOut />
      <Box component="main" sx={{ height: '69vh' }}>
        <Grid container>
          <CssBaseline />
          <Grid
            md={7}
            lg={5}
            sx={{
              backgroundImage: 'url(https://www.theboardgamefamily.com/wp-content/uploads/2013/10/FFGEventsAbove.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 25,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <CasinoTwoToneIcon />
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
                      label="Quantity"
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
                    Submit Game
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
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ color: 'Blue', textDecoration: 'underline' }}>
        Baldwin's Board Games
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

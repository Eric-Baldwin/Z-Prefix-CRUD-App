import * as React from 'react';
import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const defaultTheme = createTheme();

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/items/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error('Error fetching item details:', error));
  }, [id]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <NavBar />
      </AppBar>
      <main>
      <Box
          sx={{
            backgroundImage: 'url(https://cdn.luxatic.com/wp-content/uploads/2014/08/Geek-Chic-Luxury-Board-Game-Tables-1.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <Box container component="main" sx={{ height: '69vh' }}>
            <Box
              sx={{
                bgcolor: 'rgba(0, 0, 0, 0.7)',
                pt: 8,
                pb: 30,
              }}
            >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="White"
              gutterBottom
            >
              Item Details for: <br />
              <span style={{ color: 'magenta' }}>{item ? item.item_name : 'Loading...'}</span>
            </Typography>
            <Typography variant="h5" align="center" color="grey" paragraph>
            Description: {item ? item.description : 'Loading description...'}
            </Typography>
            <Typography variant="h6" align="center" color="aqua" paragraph>Item Quantity: {item ? item.quantity : 'Loading description...'}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button type="submit"
                variant="contained"
                bgcolor="green"
                sx={{ mt: 2, mb: 1, marginLeft: 'auto', backgroundColor: 'green', marginRight: 'auto' }} component={Link} to={`/inventory`}>
                Return to Game Inventory
              </Button>
            </Stack>
          </Container>
        </Box>
        </Box>
        </Box>
      </main>
      <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
        <Typography variant="h6" color= "white" align="center" gutterBottom>
          Keep on Rollin'!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          There are only three forms of high art: the symphony, the illustrated children’s book and the board game. – Brian K. Vaughan.
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ color: 'Blue', textDecoration: 'underline' }}>
      Baldwin's Board Games
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

import * as React from 'react';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import ItemDetails from './ItemDetails';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const defaultTheme = createTheme();

export default function Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

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
        <Box
          sx={{
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Game Inventory
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              These are my games.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Button
                type="submit"
                variant="contained"
                bgcolor="purple"
                sx={{ mt: 2, mb: 1, marginLeft: 'auto', marginRight: 'auto' }}
              >
                Add New Game
              </Button>
            </Box>
          </Container>
        </Box>
        <Container sx={{ py: 2, bgcolor: 'rgba(0, 0, 0, 0.7)'}} maxWidth="">
          <Grid container spacing={4}>
            {items.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography gutterBottom color="purple" variant="h5" component="h2" align="center">
                      {item.item_name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button type="submit"
                      variant="contained"
                      bgcolor="green"
                      sx={{ mt: 2, mb: 1, marginLeft: 'auto', marginRight: 'auto' }} component={Link} to={`/inventory/item-details/${item.id}`}>
                      View Details
                    </Button>
                    <Button type="submit"
                      variant="contained"
                      bgcolor="red"
                      sx={{ mt: 2, mb: 1, marginLeft: 'auto', marginRight: 'auto' }} size="small">Remove</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Box>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
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
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
import { BrowserRouter as Router, Routes, Route, Link, useParams, } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBarLogOut from './NavBarLogOut';
import { useNavigate } from 'react-router-dom';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const defaultTheme = createTheme();

export default function ItemDetailsMgmt() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({});


  useEffect(() => {
    fetch(`http://localhost:3000/api/items/${id}`)
      .then(response => response.json())
      .then(data => setItem(data))
      .catch(error => console.error('Error fetching item details:', error));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem(prevState => ({ ...prevState, [name]: value }));
  };

  const removeItem = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        console.log('Item removed successfully');
        navigate('/inventory-mgmt');
      } else {
        console.error('Failed to remove item.');
      }
    } catch (error) {
      console.error('There was an error removing the item:', error);
    }
  }

  const saveItem = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });

      if (response.ok) {
        console.log('Item updated successfully');
        setIsEditMode(false);
        window.location.reload();
      } else {
        console.error('Failed to update item.');
      }
    } catch (error) {
      console.error('There was an error updating the item:', error);
    }
  };

  const truncateDescription = (description) => {
    if (description.length > 100) {
      return description.substring(0, 100) + "...";
    }
    return description;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <NavBarLogOut />
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
                {isEditMode ? (
                  <input
                    type="text"
                    name="item_name"
                    defaultValue={item.item_name}
                    onChange={handleInputChange}
                    style={{ fontSize: '2.5rem', textAlign: 'center', color: 'black', marginBottom: '1rem', backgroundColor: 'lightpink' }}
                  />
                ) : (
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
                )}
                {isEditMode ? (
                  <input
                    type="text"
                    name="description"
                    defaultValue={item.description}
                    onChange={handleInputChange}
                    style={{ fontSize: '1.5rem', textAlign: 'center', color: 'black', marginBottom: '1rem', backgroundColor: 'lightpink' }} />
                ) : (
                  <Typography variant="h5" align="center" color="grey" paragraph>
                    Description: {item ? truncateDescription(item.description) : 'Loading description...'}
                  </Typography>
                )}
                {isEditMode ? (
                  <input
                    type="number"
                    name="quantity"
                    defaultValue={item.quantity}
                    onChange={handleInputChange}
                    style={{ fontSize: '1.3rem', textAlign: 'center', color: 'black', backgroundColor: 'lightpink' }} />
                ) : (
                  <Typography variant="h6" align="center" color="aqua" paragraph>
                    Item Quantity: {item ? item.quantity : 'Loading quantity...'}
                  </Typography>
                )}
                <Stack
                  sx={{ pt: 4 }}
                  direction="row"
                  spacing={2}
                  justifyContent="center"
                >
                  <Button type="submit"
                    variant="contained"
                    bgcolor="green"
                    sx={{ mt: 2, mb: 1, marginLeft: 'auto', backgroundColor: 'green', marginRight: 'auto' }} component={Link} to={`/inventory-mgmt`}>
                    Return to Game Inventory
                  </Button>
                  {isEditMode ? (
                    <Button
                      variant="contained"
                      bgcolor="blue"
                      sx={{ mt: 2, mb: 1, marginLeft: 'auto', marginRight: 'auto' }}
                      size="small"
                      onClick={saveItem}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      bgcolor="orange"
                      sx={{ mt: 2, mb: 1, marginLeft: 'auto', backgroundColor: 'darkorange', marginRight: 'auto' }}
                      size="small"
                      onClick={() => {
                        setUpdatedItem(item);
                        setIsEditMode(true);
                      }}
                    >
                      Edit
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    bgcolor="red"
                    sx={{ mt: 2, mb: 1, marginLeft: 'auto', backgroundColor: 'red', marginRight: 'auto' }}
                    size="small"
                    onClick={removeItem}>
                    Remove
                  </Button>
                </Stack>
              </Container>
            </Box>
          </Box>
        </Box>
      </main>
      <Box sx={{ bgcolor: 'black', p: 6 }} component="footer">
        <Typography variant="h6" color="white" align="center" gutterBottom>
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

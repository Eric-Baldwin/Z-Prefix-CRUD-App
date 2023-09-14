import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBarSignInUp from './NavBarSignInUp';

const defaultTheme = createTheme();

export default function SignIn() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users');
      const users = await response.json();

      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        console.log('User authenticated successfully:', user);
      } else {
        console.error('Invalid username or password.');
      }
    } catch (error) {
      console.error("There was an error fetching the users:", error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <NavBarSignInUp />
      <Grid container>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={1}
          md={7}
          sx={{
            backgroundImage: 'url(https://fuzzyllamareviewscom.files.wordpress.com/2020/01/15.jpg?w=1024)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ m: 1, bgcolor: 'green' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">Sign in</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
              <Box sx={{ my: 4, mx: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                Don't have an account?
                <Button type="submit" variant="contained" bgcolor="grey" sx={{ mt: 2, mb: 1, marginLeft: 'auto', marginRight: 'auto' }} component={Link} to={`/sign-up`}>
                  Sign Up
                </Button>
              </Box>
              <Box sx={{ bgcolor: 'background.paper', p: 4 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>Keep on Rollin'!</Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                  There are only three forms of high art: the symphony, the illustrated children’s book and the board game. – Brian K. Vaughan.
                </Typography>
                <Copyright />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
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

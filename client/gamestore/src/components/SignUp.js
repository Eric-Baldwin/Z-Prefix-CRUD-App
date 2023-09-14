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
import NavBarSignInUp from './NavBarSignInUp';
import { useState } from 'react';
import { userAPI } from '../api.js';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

export default function SignUp() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!first_name || !last_name || !username || !password) {
            alert('All fields are required to sign up.');
            return;
        }

        const user = {
            first_name,
            last_name,
            username,
            password,
            role: 'inventory_manager'
        };

        try {
            const data = await userAPI.create(user);
            console.log("Registration successful:", data);
            navigate('/sign-in');
        } catch (error) {
            console.error("Registration failed:", error.message);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <NavBarSignInUp />
            <Box component="main" sx={{ height: '69vh' }}>
                <Grid container>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={1}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://do512family.com/wp-content/uploads/2020/07/Boardgame-2-scaled.jpg)',
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
                                marginTop: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'purple' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={(e) => setFirstName(e.target.value)}
                                            value={first_name}
                                            autoComplete="given-name"
                                            name="first_name"
                                            required
                                            fullWidth
                                            id="first_name"
                                            label="First Name"
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            onChange={(e) => setLastName(e.target.value)}
                                            value={last_name}
                                            required
                                            fullWidth
                                            id="last_name"
                                            label="Last Name"
                                            name="last_name"
                                            autoComplete="family-name"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={(e) => setUsername(e.target.value)}
                                            value={username}
                                            required
                                            fullWidth
                                            id="username"
                                            label="Username"
                                            name="username"
                                            autoComplete="username"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                        />
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        Sign Up
                                    </Button>
                                </Grid>
                                <Box
                                    sx={{
                                        my: 4,
                                        mx: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    Already have an account?
                                    <Button
                                        variant="contained"
                                        bgcolor="grey"
                                        sx={{ mt: 2, mb: 1, marginLeft: 'auto', marginRight: 'auto' }}
                                        component={Link} to={`/sign-in`}
                                    >
                                        Sign In
                                    </Button>
                                </Box>
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

import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { user } from '../DummyData';
const theme = createTheme();




const Login = ({ userData }) => {

        console.log(userData.email);
   

    let InitialData = {
        email: "",
        password: ""
    }

    const [data, setdata] = useState(InitialData)
    const [localData, setLocalData] = useState({})

    let navigate = useNavigate();

    console.log('data',data);



    const onChangeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value

        setdata({ ...data, [name]: value })
    }

    

    const handleLogin = () => {
        debugger
        if (data.email === "" || data.password === "") {
            alert('Please Fill all Required Fields')
        } else {
            if (data.email === userData[0].email && data.password === userData[0].password) {
                localStorage.setItem('loginData', JSON.stringify(data))
                navigate(`/`)
            } else {
                alert('Invalid email or password')
            }
        }

    }

    return (
        <ThemeProvider theme={theme}>
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    {/* <Box component="form" noValidate
                        onSubmit={handleLogin}
                        sx={{ mt: 3 }}> */}
                    <Grid container spacing={2}>


                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={onChangeHandler}

                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onChange={onChangeHandler}

                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleLogin}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                Create New Account
                            </Link>
                        </Grid>
                    </Grid>

                    {/* </Box> */}
                </Box>
                {/* <Copyright sx={{ mt: 5 }} /> */}
            </Container>
        </ThemeProvider>
    )
}

export default Login
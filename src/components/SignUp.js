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
const theme = createTheme();

const SignUp = ({ AddNewUser, users }) => {
    let InitialData = {
        firstName: "",
        lastName: "",
        email: "",
        Phone: "",
        dob: "",
        password: ""
    }

    const [data, setdata] = useState(InitialData)

    const [user, setUser] = useState([])
    console.log(user);

    let navigate = useNavigate();

    const onChangeHandler = (e) => {
        let name = e.target.name
        let value = e.target.value

        setdata({ ...data, [name]: value })
    }

    const isValid = () => {
        if (data.firstName === "" || data.lastName === "" || data.email === "" || data.dob === "" || data.password === "") {
            alert('Please Fill all Required Fields')
        }
    }

    const HandleUser = (userdata) => {
        debugger
        console.log(userdata);
        if (userdata.firstName === "" || userdata.lastName === "" || userdata.dob === "" || userdata.email === "" || userdata.password === "") {
            alert('Please fill all required Fields')
        } else {
            const NewUser = {
                email: userdata.email,
                password: userdata.password
            }
            user.push(NewUser)
            
            
            AddNewUser(user)
            navigate(`/login`)

        }
    };



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
                        Sign up
                    </Typography>
                    {/* <Box component="form" noValidate
                        onSubmit={() => AddNewUser(data) }
                        sx={{ mt: 3 }}> */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                onChange={onChangeHandler}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                onChange={onChangeHandler}
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                onChange={onChangeHandler}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="date"
                                type="date"
                                label="Date of Birth"
                                name="dob"
                                onChange={onChangeHandler}
                                autoComplete="dob"
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
                                autoComplete="new-password"
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={() => HandleUser(data)}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/login" variant="body2">
                                Already have an account? Sign in
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

export default SignUp
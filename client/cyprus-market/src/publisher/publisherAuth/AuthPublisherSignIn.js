import React, { useState } from 'react';
import styled from 'styled-components';
import { GoogleLogin } from '@react-oauth/google';
import { Grid, Button, TextField } from '@mui/material';

function AuthPublisherSignIn() {
    const [signInData, setSignInData] = useState({
        email: '',
        password: '',
    });

    const handleSignIn = () => {
        // Handle sign-in logic here
        console.log('Signing in with:', signInData);
        // Example: send signInData to backend for authentication
    };

    const handleInputChange = (e) => {
        setSignInData({ ...signInData, [e.target.name]: e.target.value });
    };

    return (
        <Container>
            <BlocksContainer>
                <Grid>
                    <TextField
                        name="email"
                        value={signInData.email}
                        placeholder="Email"
                        style={{ position: 'relative', top: '40px', backgroundColor: 'rgb(120,00,120)', width: '400px' }}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid>
                    <TextField
                        name="password"
                        value={signInData.password}
                        placeholder="Password"
                        style={{ position: 'relative', top: '45px', backgroundColor: 'rgb(120,00,120)', width: '400px' }}
                        type="password"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Button
                    style={{ background: 'white', position: 'relative', top: '90px', right: '15px', width: '215px', height: '45px' }}
                    onClick={handleSignIn}
                >
                    Sign in
                </Button>
                <GoogleLoginMover>
                    <GoogleLogin />
                </GoogleLoginMover>
                <a href="/auth-publisher-sign-up" style={{ color: 'white', position: 'relative', top: '140px', right: '10px' }}>
                    Don't have an account? Let's sign up
                </a>
            </BlocksContainer>
        </Container>
    );
}

export default AuthPublisherSignIn;

const Container = styled.div`
    background-color: blue;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
    height: 633px;
`;

const GoogleLoginMover = styled.div`
    position: relative;
    left: 180px;
    bottom: -100px;
    top: 100px;
`;

const BlocksContainer = styled.div`
    background-color: blue;
    position: relative;
    top: 80px;
    left: 400px;
    width: 600px;
    height: 480px;
    border-radius: 40px;
`;

import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import { BsGoogle } from 'react-icons/bs';
import Button from '@mui/material/Button';

const clientId = '1031178534860-439stql0akhglcemdgqr1k2e0rak1r6n.apps.googleusercontent.com';

function Login() {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });


    return (
            <Button
                onClick={() => login()}
                sx={{ mb: 2 }}
                className="w-56"
                variant={"contained"}
                startIcon={<BsGoogle />}>
                Войти с Google
            </Button>
    );
}

export default Login;
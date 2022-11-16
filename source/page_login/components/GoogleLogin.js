import React, { useEffect } from 'react';

import { Button } from '@mui/material';
import { FcGoogle } from 'react-icons/fc'
import { useGoogleLogin } from '@react-oauth/google';

const clientId = '1031178534860-439stql0akhglcemdgqr1k2e0rak1r6n.apps.googleusercontent.com';

function Login() {

    const login = useGoogleLogin({
        onSuccess: codeResponse => {
            alert(go)
        },
        onError: codeResponse =>
        {
            alert(codeResponse)
        }
    });

    useEffect(() => {
        window.google.accounts.oauth2.initCodeClient
            ({
                client_id: clientId,
                scope: "https://www.googleapis.com/auth/userinfo.email",
                ux_mode: 'popup',
                callback: (response) => {
                    alert('123123' + response.credential)

                },
            });
    }, [])

    return (
        <div>
                <Button
                    onClick={() => login()}
                    sx={{
                        "text-transform": "none",
                        mb: 2,
                    }}
                    className="w-56"
                    startIcon={<FcGoogle />}
                    variant={"outlined"}>Войти с Google</Button>
        </div>
    );
}

export default Login;
import { Button, Container, Typography } from "@mui/material";
import {  logo48 } from "../assets";


function Login() {
    return (
        <Container
            sx={{
                display : "flex",
                flexDirection : "column",
                justifyContent : "space-evenly",
                alignItems : "center",
                height : "100vh"

            }}
        >
            Login
            <div
                style={{
                    display : "flex",
                    justifyContent : "space-evenly",
                }}
            >
                <img src={logo48} alt="logo" />
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight : 'bold',
                        fontFamily : "DotGothic16, sans-serif"
                    }}
                >
                    ListenIt
                </Typography>
            </div>
            <Button
                variant="contained"
                size="medium"
                sx={{
                    backgroundColor : "#FF004D",
                    textAlign : "center",
                    '&:hover':{
                        backgroundColor : "#FF004D",
                    }
                    
                }}
            >
                Log in
            </Button>
        </Container>
    );
}

export default Login;

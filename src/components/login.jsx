import { Button, Container, Typography } from "@mui/material";
import { logo48 } from "../assets";
import { loginUrl } from "../../server/utils/ListenIt.js";

function Login() {
    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "100vh",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <img src={logo48} alt="logo" />
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                    }}
                >
                    ListenIt
                </Typography>
            </div>
            <a href={loginUrl}>
                <Button
                    variant="contained"
                    size="medium"
                    sx={{
                        backgroundColor: "#FF004D",
                        textAlign: "center",
                        borderRadius: "15px",
                        width: "250px",
                        height: "65px",
                        fontWeight: "bold",
                        fontSize: "1rem",
                        textDecoration: "none",
                        fontFamily: "Poppins, sans-serif",
                        "&:hover": {
                            backgroundColor: "#FF004D",
                        },
                    }}
                >
                    Log in with Us
                </Button>
            </a>
        </Container>
    );
}

export default Login;

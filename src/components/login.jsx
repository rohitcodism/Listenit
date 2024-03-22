import { motion } from "framer-motion";
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
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
            >
                <motion.img
                    src={logo48}
                    alt="logo"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Poppins, sans-serif",
                        }}
                    >
                        ListenIt
                    </Typography>
                </motion.div>
            </motion.div>
            <a href={loginUrl}>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
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
                            '&:hover':{
                                backgroundColor: "#FF004D"
                            }
                        }}
                    >
                        Log in with Us
                    </Button>
                </motion.div>
            </a>
        </Container>
    );
}

export default Login;

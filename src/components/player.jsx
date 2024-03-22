import { Container, Typography } from '@mui/material';
import React from 'react'

function Player() {
    return (
        <Container
            sx={{
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
                justifyContent : "space-evenly",
            }}
        >
            <Typography
                sx={{
                    textAlign : "center",
                    fontWeight : "bold",
                    fontSize : "2rem",
                    fontFamily : "Poppins, sans-serif",
                    pt : "2rem"
                }}
            >
                Welcome to Listen<span style={{color : "#FF004D"}}>It</span>
            </Typography>
        </Container>
    )
}

export default Player;
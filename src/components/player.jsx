import { Container, Typography } from '@mui/material';
import SideBar from './SideBar';
import Body from './Body';
import { Footer } from './Footer';

// TODO : 1. Sidebar, 2. Body, 3. Footer

function Player({ spotify }) {
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
            <div className="player-body">
                <SideBar />
                <Body />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </Container>
    )
}

export default Player;
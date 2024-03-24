import { Typography } from '@mui/material';
import SideBar from './SideBar';
import Body from './Body';
import { Footer } from './Footer';

// TODO : 1. Sidebar, 2. Body, 3. Footer

function Player({ spotify }) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection : "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                width : "100%",
                height : "100%"
            }}
        >
            <div
                className='main-container'
                style={{
                    display : 'flex',
                    width : "100%",
                    height : "80%"
                }}
            >
                <SideBar />
                <Body />
            </div>
            <div
                className='footer-container'
                style={{
                    width : "100%",
                    alignSelf : 'center',
                    height : "20%"
                }}
            >
                <Footer />
            </div>
        </div>
    )
}

export default Player;



import { Container } from '@mui/material';
import { Logo } from './Logo';

function SideBar() {
    return (
        <Container
            sx={{
                flex : 0.2,
                padding : 0,
                margin : 0,
                color : "white",
                height : "100vh",
                minWidth : "230px",
                fontFamily : "Poppins, sans-serif",
                py : "1rem",
                display : "flex",
                flexDirection : "column",
                alignItems : "center",
            }}
            className='sidebar'
        >
            <Logo />
        </Container>
    )
}

export default SideBar;

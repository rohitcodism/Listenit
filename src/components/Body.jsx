import { Container } from '@mui/material';

function Body() {
    return (
        <Container
            sx={{
                flex: 0.8,
                padding: "30px",
                margin: 0,
                background: "linear-gradient(343deg, rgba(0,0,0,1) 23%, rgba(255,0,77,1) 89%)",
                height : "100vh",
                color : "white",
                fontFamily : "Poppins, sans-serif"
            }}
            className='body'
        >
            Body
        </Container>
    )
}

export default Body;


//backgroundColor: "linear - gradient(90deg, rgba(2, 0, 36, 1) 0 %, rgba(255, 0, 77, 1) 70 %)",
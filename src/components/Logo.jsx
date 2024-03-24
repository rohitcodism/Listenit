import { Typography } from "@mui/material";
import { logo48 } from "../assets";


export const Logo = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img src={logo48} alt="logo-listenIt" height="36px" width="36px" />
            <div
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "bold",
                        fontFamily: "Poppins, sans-serif",
                        fontSize : "1.8rem",
                        paddingLeft : "0.5rem"
                    }}
                >
                    ListenIt
                </Typography>
            </div>
        </div>
    );
}
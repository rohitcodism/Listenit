import { Typography, duration } from "@mui/material";
import { motion } from "framer-motion";

export const SideBarOptions = ({ title, Icon }) => {
    return (
        <motion.div
            className="side-bar-options"
            style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
                fontSize: "1rem",
                display: "flex",
                alignItems: "center",
                alignSelf: "start",
                height: "45px",
                cursor: "pointer",
            }} // Scale up on hover
            whileHover={{ color : "white" }}
            transition={{ duration: 0.4 }} // Smooth transition on hover
        >
        {/* TODO : Make the animation smoother!!! */}
            {Icon && <Icon 
                style={{ 
                    marginRight: "15px", 
                    color : "grey" ,
                }}
                whileHover={{ color : "white" }} //TODO : Make the Icon white on hover
                
            />}
            <Typography
                variant="h4"
                sx={{
                    margin: 0,
                    padding: 0,
                    fontWeight: 600,
                    color: "grey",
                    fontSize: "1.2rem",
                    "&:hover": { color: "white" }, // Change color on hover
                    transition:{
                        transitionDuration : 0.4,
                    }
                }}
            >
                {title}
            </Typography>
        </motion.div>
    );
};

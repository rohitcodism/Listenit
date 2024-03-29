import { Avatar } from "@mui/material";
import { Search } from "lucide-react";
import { StateProviderValue } from "../context/StateProvider";


export const Header = ({ spotify }) => {

    const [{user}, dispatch] = StateProviderValue();

    return(
        <div
            className="body-header"
            style={{
                display : "flex",
                justifyContent : "space-between",
                marginBottom : "30px",
            }}
        >
            <div 
                className="header-left"
                style={{
                    flex : 0.5,
                    minWidth : "70px",
                    backgroundColor : "white",
                    color : "#FF004D",
                    borderRadius : "30px",
                    display : "flex",
                    alignItems : "center",
                    padding : "10px",

                }}
            >
                <Search />
                <input 
                    placeholder="Search for artists, songs and podcasts"         
                    type="text"
                    style={{
                        border : "none",
                        width : "100%"
                    }}
                />
            </div>
            <div 
                className="header-right"
                style={{
                    display : "flex",
                    alignItems : "center",
                }}
            >
                <Avatar 
                    src={user?.images[0]?.url}
                    alt={user?.display_name}
                />
                <h4
                    style={{
                        marginLeft : "10px"
                    }}
                >
                    {user?.display_name}
                </h4>
            </div>
        </div>
    );
}
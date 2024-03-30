import { Avatar, InputAdornment, InputBase, Paper } from "@mui/material";
import { Search } from "lucide-react";
import { StateProviderValue } from "../context/StateProvider";

export const Header = ({ spotify }) => {
    const [{ user }, dispatch] = StateProviderValue();

    return (
        <div
            className="body-header"
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "30px",
            }}
        >
            <Paper
                component="form"
                elevation={3}
                style={{
                    flex: 0.5,
                    borderRadius: "30px",
                    backgroundColor: "#fff",
                    display: "flex",
                    alignItems: "center",
                    padding: "5px 10px",
                }}
            >
                <Search
                    style={{
                        color: "#FF004D",
                        marginRight: "10px",
                        marginLeft: "5px",
                    }}
                />
                <InputBase
                    placeholder="Search for artists, songs and podcasts"
                    style={{
                        flexGrow: 1,
                    }}
                />
            </Paper>
            <div
                className="header-right"
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Avatar
                    src={user?.images[0]?.url}
                    alt={user?.display_name}
                    style={{ marginRight: "10px" }}
                />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

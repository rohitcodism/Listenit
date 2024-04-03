import { Container, Typography } from '@mui/material';
import { Logo } from './Logo';
import { SideBarOptions } from './SideBarOptions';
import { Home, Search, LibraryMusic } from '@mui/icons-material';
import { StateProviderValue } from '../context/StateProvider';
import axios from 'axios';
import { useEffect } from 'react';

function SideBar() {



    const [{playlists, featuredPlaylists, token}, dispatch] = StateProviderValue();

        const featPlaylists = async() => {
            const res = await axios.get(
                `https://api.spotify.com/v1/browse/featured-playlists`,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            return res;
        }

        useEffect(() => {
            featPlaylists().then((res) =>{
                console.log("Response  for Featured Playlists : ", res);
                dispatch({
                    type: "SET_FEATURED_PLAYLISTS",
                    featuredPlaylists: res.data.playlists.items,
                });
            }).catch((err) =>{
                console.log("Error in fetching Featured Playlists : ", err);
            });
        }, [])

    console.log("Featured Playlists : ", featuredPlaylists);

    playlists && console.log(playlists);

    const handlePlaylistClicked = (playlistId) => {
        console.log("Playlist ID : ", playlistId);
        dispatch({
            type: "SET_USER_CLICKED_PLAYLIST_ID",
            userClickedPlaylistId: playlistId,
        });
    } 

    return (
        <Container
            sx={{
                flex: 0.2,
                padding: 0,
                margin: 0,
                height: "100vh",
                minWidth: "230px",
                fontFamily: "Poppins, sans-serif",
                py: "1rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflowY : "auto",
            }}
            className='sidebar'
        >
            <Logo />
            <SideBarOptions title="Home" Icon={Home} />
            <SideBarOptions title="Search" Icon={Search} />
            <SideBarOptions title="Your Library" Icon={LibraryMusic} />
            <div
                style={{
                    paddingTop : "1rem",
                    paddingBottom : "0.5rem",
                    width : "100%"
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontFamily: "Poppins, sans-serif",
                        alignSelf: "start",
                        color: "grey",
                        fontSize: "1.2rem",
                    }}
                >
                    Playlists
                </Typography>
                <hr
                    style={{
                        width: "100%",
                        color: "grey",
                        border: "1px solid #282828",
                    }}
                />
            </div>
            {playlists?.items?.map((playlist) => (
                <div
                    key={playlist.id}
                    onClick={() => handlePlaylistClicked(playlist.id)}
                >
                    <SideBarOptions  key={playlist.name}  title={playlist.name}/>
                </div>
            ))}
            {
                featuredPlaylists?.map((playlist) => (
                    <div
                        key={playlist.name} 
                        onClick={() => handlePlaylistClicked(playlist.id)}
                    >
                        <SideBarOptions title={playlist.name}/>
                    </div>
            ))}
        </Container>
    )
}

export default SideBar;

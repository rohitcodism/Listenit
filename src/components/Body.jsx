import { Container, Grid } from '@mui/material';
import { Header } from './Header';
import { StateProviderValue } from '../context/StateProvider';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FavoriteBorder, PauseCircleFilled } from '@mui/icons-material';
import { Track } from './Track';
import axios from 'axios';


function Body({ spotify }) {
    const [{ discover_weekly, userClickedPlaylist, userClickedPlaylistId, token }, dispatch] = StateProviderValue();

    const fetchPlaylistById = async () => {
        axios.get(`https://api.spotify.com/v1/playlists/${userClickedPlaylistId}`,
        {
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        } 
        ).then((res) => {
            console.log("" + res.data);
            dispatch({
                type: "SET_USER_CLICKED_PLAYLIST",
                userClickedPlaylist: res.data,
            })
        }).catch((err) => {
            console.log("" + err);
        })
    }

    useEffect(() => {
        if (userClickedPlaylistId) {
            fetchPlaylistById();
        }
    }, [userClickedPlaylistId])


    const shownPlaylist = userClickedPlaylist;

    const tracks = shownPlaylist?.tracks?.items;




    const [selectedTrack, setSelectedTrack] = useState(null);

    const [heartClicked, setHeartClicked] = useState(false);
    const [playButtonClicked, setPlayButtonClicked] = useState(false);

    useEffect(() => {
        dispatch({
            type: "SET_TRACK",
            track: selectedTrack,
        })
    }, [selectedTrack])

    const playTrack = (previewUrl) => {

        console.log("URL got in Player : ",previewUrl)

        const audio = new Audio(previewUrl);

        audio.currentTime = 0;

        audio.play();
    }

    

    return (
        <Container
            sx={{
                flex: 0.8,
                padding: "30px",
                margin: 0,
                background: "linear-gradient(343deg, rgba(0,0,0,1) 23%, rgba(255,0,77,1) 89%)",
                height: "100vh",
                color: "white",
                fontFamily: "Poppins, sans-serif",
                overflowY: "auto", // Allow scrolling for tracks
            }}
            className='body'
        >
            <Header spotify={spotify} />
            <Grid container direction="column" spacing={2}>
                <Grid item container justifyContent="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <img
                            src={shownPlaylist?.images[0]?.url}
                            alt=""
                            style={{
                                width: "150px", // Adjust image size
                                height: "150px", // Adjust image size
                                objectFit: "contain",
                                boxShadow: "0 4px 60px rgba(0, 0 ,0 , 0.5)"
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={8}>
                        <div className="body-infoText">
                            <strong>{shownPlaylist?.type}</strong>
                            <h2>{shownPlaylist?.name}</h2>
                            <p>{shownPlaylist?.description}</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={2}>
                        <div className="body-icons" style={{ display: "flex", alignItems: "center" }}>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setPlayButtonClicked(!playButtonClicked)}
                                style={{
                                    cursor: "pointer",
                                }}
                            >
                                {playButtonClicked ?
                                    <PauseCircleFilled
                                        sx={{
                                            fontSize: "80px",
                                            marginRight: "20px"
                                        }}
                                    />
                                    : <PlayCircleFilledIcon
                                        sx={{
                                            fontSize: '80px',
                                            marginRight: "20px"
                                        }}
                                    />
                                }
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setHeartClicked(!heartClicked)}
                                sx={{ cursor: "pointer" }}
                            >
                                {!heartClicked ?
                                    <FavoriteBorder
                                        fontSize="large"
                                        sx={{
                                            marginRight: "20px"
                                        }}
                                    />
                                    : <FavoriteIcon
                                        fontSize="large"
                                        sx={{
                                            marginRight: "20px"
                                        }}
                                    />
                                }
                            </motion.div>
                            <MoreHorizIcon fontSize="large" />
                        </div>
                    </Grid>
                </Grid>
                <Grid item>
                    {tracks?.map((track) => (
                        <Track key={track?.id} track={track?.track} setSelectedTrack={setSelectedTrack} playTrack={playTrack}/>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Body;

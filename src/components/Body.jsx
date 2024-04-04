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

    // Fetch playlist by id that user clicked on from sidebar

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


    // Play track with given track url from player
    const playTrack = async (trackUrl) => {
        const requestBody = {
            context_uri: trackUrl,
            offset: {
                position: 5,
            },
            position_ms: 0,
        };

        await axios.put(`https://api.spotify.com/v1/me/player/play`, requestBody,
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
    }


    useEffect(() => {
        if (userClickedPlaylistId) {
            fetchPlaylistById();
        }
    }, [userClickedPlaylistId]);

    const handleTrackClick = async (trackUrl) => {

        console.log("Track clicked : ", trackUrl);

        await playTrack(trackUrl);

    }


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
            { shownPlaylist ? (<div>
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
                            <Track key={track?.id} track={track?.track} setSelectedTrack={setSelectedTrack} handleTrackClick={handleTrackClick} />
                        ))}
                    </Grid>
                </Grid>
            </div>) : null}
        </Container >
    );
}

export default Body;

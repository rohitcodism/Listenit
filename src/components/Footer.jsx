import { useState } from 'react';
import { Shuffle, PlayCircle, SkipBack, SkipForward, Repeat, ListPlus, Volume1, Volume2, VolumeX } from "lucide-react";
import { Grid, Slider } from '@mui/material';
import { StateProviderValue } from '../context/StateProvider';
import axios from 'axios';

export const Footer = () => {

    const[{track, playerState, token}, dispatch] = StateProviderValue();
    
    const [hoveredIconIndex, setHoveredIconIndex] = useState(null);

    const handleIconHover = (index) => {
        setHoveredIconIndex(index);
    };

    const handleIconLeave = () => {
        setHoveredIconIndex(null);
    };

    //* API Calls */
    const changeTrack = async(type) => {
        console.log("Api call made for  : ",type);
        await axios.post(
            `https://api.spotify.com/v1/me/player/${type}`,{},
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );
        
        const res = axios.get(
            `https://api.spotify.com/v1/me/player/currently-playing`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type" : "application/json"
                },
            }
        );
    
        if(res.data !== ""){
            const {item} = res.data;
            const currentlyPlaying = {
                id : item.id,
                name : item.name,
                artists : item.artists.map((artist) => artist.name),
                image : item.album.images[0].url,
            };
            dispatch(
                {
                    type : 'SET_PLAYING',
                    currentlyPlaying,
                }
            )
        }else{
            dispatch(
                {
                    type : 'SET_PLAYING',
                    currentlyPlaying : null,
                }
            )
        }
    }

    return (
        track ? <div
            style={{
                position: "fixed",
                bottom: "20px", // Adjust the distance from the bottom as needed
                left: "50%", // Center the footer horizontally
                transform: "translateX(-50%)", // Adjust for centering
                width: "1200px", // Limit the width of the footer
                fontFamily: "Poppins, sans-serif",
                backgroundColor: "black",
                boxShadow: "0px -2px 10px rgba(0, 0, 0, 0.2)",
                zIndex: 999,
                border: "2px solid white",
                borderRadius: "20px"
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px"
                }}
            >
                <div 
                    className="footer_left" 
                    style={{ 
                        flex: 0.3,
                        display : "flex",
                        alignItems : "center",
                        color : "white",
                        width : "300px"
                    }}
                >
                    <img 
                        src={track?.album?.images[0].url}
                        alt="" 
                        style={{
                            height : "60px",
                            width : "60px",
                            marginRight : "20px",
                            objectFit : "contain",
                            borderRadius : "5px"
                        }}
                    />
                    <div
                        className='footer-songInfo'
                    >
                        <h4
                            style={{
                                color : "#FF004D"
                            }}
                        >
                            {track?.name}
                        </h4>
                        <p>{track?.artists[0]?.name}</p>
                    </div>
                </div>

                <div
                    className="footer-center"
                    style={{
                        flex: 0.4,
                        padding: "0 100px",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        maxWidth: "300px",
                    }}
                >
                    <Shuffle
                        size={20}
                        style={{
                            transition: "color 0.3s ease",
                            color: hoveredIconIndex === 0 ? "#FF004D" : "white",
                            cursor: "pointer",
                        }}
                        onMouseEnter={() => handleIconHover(0)}
                        onMouseLeave={handleIconLeave}
                    />
                    <SkipBack
                        size={20}
                        style={{
                            transition: "color 0.3s ease",
                            color: hoveredIconIndex === 1 ? "#FF004D" : "white",
                            cursor: "pointer",
                        }}
                        onMouseEnter={() => handleIconHover(1)}
                        onMouseLeave={handleIconLeave}
                        onClick={() => changeTrack('previous')}
                    />
                    <PlayCircle
                        size={27}
                        style={{
                            transition: "color 0.3s ease",
                            color: hoveredIconIndex === 2 ? "#FF004D" : "white",
                            cursor: "pointer",
                        }}
                        onMouseEnter={() => handleIconHover(2)}
                        onMouseLeave={handleIconLeave}
                    />
                    <SkipForward
                        size={20}
                        style={{
                            transition: "color 0.3s ease",
                            color: hoveredIconIndex === 3 ? "#FF004D" : "white",
                            cursor: "pointer",
                        }}
                        onMouseEnter={() => handleIconHover(3)}
                        onMouseLeave={handleIconLeave}
                        onClick={() => changeTrack('next')}
                    />
                    <Repeat
                        size={20}
                        style={{
                            transition: "color 0.3s ease",
                            color: hoveredIconIndex === 4 ? "#FF004D" : "white",
                            cursor: "pointer",
                        }}
                        onMouseEnter={() => handleIconHover(4)}
                        onMouseLeave={handleIconLeave}
                    />
                </div>

                <div
                    className="footer-right"
                    style={{
                        flex: 0.3,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        color: "white",
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                    >
                        <Grid
                            item
                        >
                            <ListPlus
                                style={{
                                    transition: "color 0.3s ease",
                                    color: hoveredIconIndex === 5 ? "#FF004D" : "white",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={() => handleIconHover(5)}
                                onMouseLeave={handleIconLeave}
                            />
                        </Grid>
                        <Grid
                            item
                            style={{
                                transition: "color 0.3s ease",
                                color: hoveredIconIndex === 6 ? "#FF004D" : "white",
                                cursor: "pointer",
                            }}
                            onMouseEnter={() => handleIconHover(6)}
                            onMouseLeave={handleIconLeave}
                        >
                            <Volume1 />
                        </Grid>
                        <Grid
                            item
                            xs
                        >
                            <Slider
                                size='medium'
                                defaultValue={40}
                                max={100}
                                valueLabelDisplay='auto'
                                sx={{
                                    color : "#FF004D",
                                    width : "160px"
                                }}
                                
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div> : null
    );
};


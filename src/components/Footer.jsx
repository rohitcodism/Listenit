import { useState } from 'react';
import { Shuffle, PlayCircle, SkipBack, SkipForward, Repeat, ListPlus, Volume1, Volume2, VolumeX } from "lucide-react";
import { Grid, Slider } from '@mui/material';

export const Footer = () => {
    const [hoveredIconIndex, setHoveredIconIndex] = useState(null);

    const handleIconHover = (index) => {
        setHoveredIconIndex(index);
    };

    const handleIconLeave = () => {
        setHoveredIconIndex(null);
    };

    return (
        <div
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
                        src="https://search.brave.com/images?q=Despacito&context=W3sic3JjIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vdGh1bWIvYy9jOC9MdWlzX0ZvbnNpX0ZlYXQuX0RhZGR5X1lhbmtlZV8tX0Rlc3BhY2l0b18lMjhPZmZpY2lhbF9TaW5nbGVfQ292ZXIlMjkucG5nLzUxMnB4LUx1aXNfRm9uc2lfRmVhdC5fRGFkZHlfWWFua2VlXy1fRGVzcGFjaXRvXyUyOE9mZmljaWFsX1NpbmdsZV9Db3ZlciUyOS5wbmciLCJ0ZXh0IjoiTHVpc19Gb25zaV9GZWF0Ll9EYWRkeV9ZYW5rZWVfLV9EZXNwYWNpdG9fKE9mZmljaWFsX1NpbmdsZV9Db3ZlcikucG5nIiwicGFnZV91cmwiOiJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9EZXNwYWNpdG8ifV0%3D&sig=f3c0f4d0347393ca0b3068b30a6980c27a738f4284792d7896add7e8ad05e6a7&nonce=3f66c1647427acfb565503f548880606" 
                        alt="music-image" 
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
                            Despacito
                        </h4>
                        <p>Justine Bieber</p>
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
        </div>
    );
};


import { motion } from "framer-motion";

export const Track = ({ track, setSelectedTrack, handleTrackClick }) => {
    return (
        <motion.div
            className="song-row"
            style={{
                marginLeft: "20px",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                zIndex: "100",
                color: "white",
                transition: "background-color 0.3s ease",
                borderRadius : "10px"
            }}
            whileHover={{
                cursor: "pointer",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            onClick={() => {setSelectedTrack(track); handleTrackClick(track?.uri)}}
        >
            <img
                src={track.album?.images[0]?.url}
                alt={track.name}
                style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    marginRight: "20px",
                }}
            />
            <div className="song-info">
                <h1 style={{ fontSize: "16px", marginBottom: "5px" }}>
                    {track.name}
                </h1>
                <p style={{ fontSize: "14px", color: "grey" }}>
                    {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                    {track.album.name}
                </p>
            </div>
        </motion.div>
    );
};

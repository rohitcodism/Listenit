export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:5173/";

const clientId = "aa61c802ca034ce789ee826ac2625690";

console.log(clientId);

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
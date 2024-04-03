import { useEffect, useState } from "react";
import Login from "./components/login";
import { getAccessTokenFromUrl } from "../server/utils/ListenIt";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player";
import { StateProviderValue } from './context/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [aToken, setAToken] = useState(" ");

  const [{ user, token, userCLickedPlaylistId }, dispatch] = StateProviderValue();

  useEffect(() => {
    const Token = getAccessTokenFromUrl();
    window.location.hash = "";
    const _Token = Token?.access_token;

    console.log("token : ", _Token);

    if (_Token) {
      setAToken(_Token);

      if(aToken){
        dispatch({
          type: "SET_TOKEN",
          token: _Token,
        })
      }

      spotify.setAccessToken(_Token);



      spotify.getMe().then(user => {
        user ? console.log(`User : `, user) : ("did not get anything!!!"); dispatch({
          type: 'SET_USER',
          user: user,

        })
      });


      //* Getting user Playlists */
      spotify.getUserPlaylists(userCLickedPlaylistId).then((playlists) => {
        console.log("playlists : ", playlists);
        dispatch({
          type : 'SET_PLAYLISTS',
          playlists : playlists,
        })
      })

      //* Getting Playlist By Id */
      spotify.getPlaylist(userCLickedPlaylistId).then((res) => {
        console.log("res : ", res),
        dispatch({
          type : "SET_USER_CLICKED_PLAYLIST",
          userCLickedPlaylist: res,
        })
      })

    }
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
      }}
    >
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;

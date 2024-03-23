import { useEffect, useState } from "react";
import Login from "./components/login";
import { getAccessTokenFromUrl } from "../server/utils/ListenIt";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player";
import { StateProviderValue } from './context/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [aToken, setAToken] = useState(" ");

  const [{ user, token }, dispatch] = StateProviderValue();

  useEffect(() => {
    const token = getAccessTokenFromUrl();
    window.location.hash = "";
    const _Token = token?.access_token;

    if (_Token) {
      setAToken(_Token);

      if(token){
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

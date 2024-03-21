import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/login";
import { getAccessTokenFromUrl } from "../server/utils/ListenIt";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(" ");

  useEffect(() => {
    const token = getAccessTokenFromUrl();
    window.location.hash = "";
    const accessToken = token?.access_token;
    console.log("I have a token.", accessToken);

    if (accessToken){
      setToken(accessToken);
      spotify.setAccessToken(accessToken);
      spotify.getMe().then(user => {
        user ? console.log(`User : `,user) : ("did not get anything!!!");
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
      <Login />
    </div>
  );
}

export default App;

import { Container, Typography } from '@mui/material';
import { Logo } from './Logo';
import { SideBarOptions } from './SideBarOptions';
import { Home, Search, LibraryMusic } from '@mui/icons-material';
import { StateProviderValue } from '../context/StateProvider';

function SideBar() {

    const [{playlists}, dispatch] = StateProviderValue()

    playlists && console.log(playlists);

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
                <SideBarOptions key={playlist.name}  title={playlist.name}/>
            ))}
        </Container>
    )
}

export default SideBar;

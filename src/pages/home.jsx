import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState,useRef } from "react";
import Player from "../components/Player/player";
import UploadForm from "../components/uploadForm";
import SongList from "../components/songList";
import { useSongs } from "../contexts/songsContext";
import WavePlayer from "../components/Player/WavePlayer/wavePlayer";
import WaveformPlayerList from "../components/multiPlayer";

function Home() {
  const multitrackRef = useRef(null);
  const [player, setPlayer] = useState(0);
  const {songs}=useSongs();
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "2%",
          fontFamily: "cursive",
        }}
      >
        " Juke-Box "
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
        mt={2}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <UploadForm />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <SongList />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    {/* Conditionally rendering type of player and also checking if songs are loaded in our Playlist. */}
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {songs.length > 0 ? (
          <>
            {player === 0 ? (
              <>
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => setPlayer(1)}>
                    Play Individually
                  </Button>
                  <Button onClick={() => setPlayer(2)}>
                    Play in Multiplayer
                  </Button>
                </Stack>
              </>
            ) : player === 1 ? (
              <>
                <Stack direction="column">
                  <Button onClick={() => setPlayer(0)}>Change Player</Button>
                  <Player />
                </Stack>
              </>
            ) : (
              <>
                <Stack direction="column">
                  <Button onClick={() => setPlayer(0)}>Change Player</Button>
                  {/* <WavePlayer/> */}
                  <WaveformPlayerList multitrackRef={multitrackRef}/>
                </Stack>
              </>
            )}
          </>
        ) : (
          <>
            <Typography variant="h4" sx={{ fontFamily: "cursive" }}>Please add songs 🥂</Typography>
          </>
        )}
        
      </Box>
    </Box>
  );
}

export default Home;

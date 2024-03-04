import React, { useRef } from "react";
import { useSongs } from "../contexts/songsContext";
import {
  Box,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import DeleteIcon from '@mui/icons-material/Delete';

function SongList() {
  const { songs, setSongs } = useSongs();
  const dragSong = useRef(0);
  const draggedOverSong = useRef(0);

  //Function for Sorting our Playlist using Drag & Drop feature.
  const handleSort = () => {
    const songsCopy = [...songs];
    const draggedSong = songsCopy.splice(dragSong.current, 1)[0];
    songsCopy.splice(draggedOverSong.current, 0, draggedSong);
    setSongs(songsCopy);
  };

  //Function for removing a song from our Playlist.
  const removeSong = (id) => {
    setSongs((songs) => {
      return songs.filter((item, idx) => {
        return idx !== id;
      });
    });
  };

  return (
    <div style={{margin:"1%"}}>
      <Stack direction="row">
        <LibraryMusicIcon fontSize="large" />
        <Typography variant="h4" sx={{ fontFamily: "cursive" }}>
          Playlist
        </Typography>
      </Stack>
      <Box
        sx={{
          height: "50vh",
          width: "100%",
          overflowY: "auto",
          overflowX: "hidden",
          padding: "10px",
          scrollbarWidth: "thin",
          "-webkit-scrollbar": {
            width: "thin",
          },
        }}
      >
        {songs.map((song, index) => (
          <Box
            key={index}
            sx={{
              border: "5px solid #80B3FF",
              backgroundColor: "#98E4FF",
              margin: "5%",
              padding: "5%",
              width: "80%",
              cursor: "grab",
            }}
            draggable
            onDragStart={() => (dragSong.current = index)}
            onDragEnter={() => (draggedOverSong.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
            
          >
            <Grid container spacing={1}>
              <Grid item xs={10}>
                {index + 1}. {song.name}
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={()=>removeSong(index)}>
                  <DeleteIcon sx={{color:"#687EFF"}} />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </div>
  );
}

export default SongList;

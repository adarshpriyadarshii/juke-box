import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useSongs } from "../contexts/songsContext";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import FileUploadIcon from "@mui/icons-material/FileUpload";

function UploadForm() {
  const { songs, setSongs } = useSongs();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileRef = useRef(null);

  //Function for selecting files.
  const handleSelectedSongs = (event) => {
    const newSongs = Array.from(event.target.files);
    setSelectedFiles(newSongs);
  };

  //Function for adding selected songs to our Playlist.
  const handleAdd = () => {
    if (selectedFiles.length > 0) {
      setSongs([...songs, ...selectedFiles]);
      setSelectedFiles([]);
      fileRef.current.value = null;
    }
  };

  return (
    <Box>
      <Stack direction="row">
        <AddCircleOutlineIcon fontSize="large" />
        <Typography variant="h4" sx={{ fontFamily: "cursive" }}>
          Add Song/Songs
        </Typography>
      </Stack>
      <Box sx={{ margin: "5%" }}>
        <label htmlFor="upload-input">
          <input
            id="upload-input"
            type="file"
            accept="audio/*"
            onChange={handleSelectedSongs}
            multiple
            style={{ display: "none" }}
            ref={fileRef}
          />
          <Button
            variant="outlined"
            startIcon={<FileUploadIcon />}
            component="span"
            sx={{
              border: "5px solid #80B3FF",
              backgroundColor: "#98E4FF",
              "&:hover": {
                border: "5px solid #80B3FF",
                backgroundColor: "#B6FFFA",
              },
            }}
          >
            <Typography variant="h6" sx={{ fontFamily: "cursive" }}>
              Select Songs
            </Typography>
          </Button>
        </label>
      </Box>
      {selectedFiles.length > 0 ? (
        <>
          <Typography>Selected Songs Are :</Typography>
          <Box>
            {selectedFiles.map((song, idx) => (
              <Box key={idx}>{song.name}</Box>
            ))}
          </Box>
          <Box sx={{ margin: "5%" }}>
            <Button
              onClick={handleAdd}
              variant="outlined"
              startIcon={<PlaylistAddIcon />}
              sx={{
                border: "5px solid #80B3FF",
                backgroundColor: "#98E4FF",
                "&:hover": {
                  border: "5px solid #80B3FF",
                  backgroundColor: "#B6FFFA",
                },
              }}
            >
              Add
            </Button>
          </Box>
        </>
      ) : (
        <></>
      )}
    </Box>
  );
}

export default UploadForm;

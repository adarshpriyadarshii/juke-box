import React, { useState, useEffect, useRef } from "react";
import { useSongs } from "../../contexts/songsContext";
import { Box, Typography, IconButton } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay10Icon from "@mui/icons-material/Replay10";

function Player() {
  const { songs } = useSongs();
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [audioSrc, setAudioSrc] = useState("");
  const audioRef = useRef(null);

  useEffect(() => {
    if (songs.length > 0) {
      setCurrentAudioIndex(0);
    } else {
      setCurrentAudioIndex(0);
      setAudioSrc("");
    }
  }, [songs]);

  //Changing our Current playing song when there is change in our Playlist.
  useEffect(() => {
    if (songs.length > 0) {
      const file = songs[currentAudioIndex];
      if (file) {
        setAudioSrc(URL.createObjectURL(file));
      }
    }
  }, [currentAudioIndex, songs]);

  //Function for auto-playing next song in our Playlist.
  const handleAudioEnded = () => {
    if (currentAudioIndex < songs.length - 1) {
      setCurrentAudioIndex(currentAudioIndex + 1);
    } else {
      setCurrentAudioIndex(0);
    }
  };

  //Function to change to next track in our Playlist.
  const handlePlayNext = () => {
    if (currentAudioIndex < songs.length - 1) {
      setCurrentAudioIndex(currentAudioIndex + 1);
    }
  };

  //Function to change to previous track in our Playlist.
  const handlePlayPrev = () => {
    if (currentAudioIndex > 0) {
      setCurrentAudioIndex(currentAudioIndex - 1);
    }
  };

  //Function to move 10 sec forward in current playing song.
  const handleForward = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime + 10;
      audioRef.current.currentTime = Math.min(
        newTime,
        audioRef.current.duration
      );
    }
  };

  //Function to move 10 sec backward in current playing song.
  const handleBackward = () => {
    if (audioRef.current) {
      const newTime = audioRef.current.currentTime - 10;
      audioRef.current.currentTime = Math.max(newTime, 0);
    }
  };

  return (
    <div
      style={{ alignItems: "center", justifyContent: "center", margin: "2%" }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {songs.length > 0 ? (
          <Typography>Playing: {songs[currentAudioIndex]?.name}</Typography>
        ) : (
          ""
        )}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <IconButton
          disabled={currentAudioIndex === 0 || songs.length === 0}
          onClick={handlePlayPrev}
          sx={{ color: "#687EFF" }}
        >
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={handleBackward} sx={{ color: "#687EFF" }}>
          <Replay10Icon />
        </IconButton>

        <audio
          ref={audioRef}
          controls
          autoPlay
          src={audioSrc}
          onEnded={handleAudioEnded}
        >
          Your browser does not support the audio element.
        </audio>
        <IconButton onClick={handleForward} sx={{ color: "#687EFF" }}>
          <Forward10Icon />
        </IconButton>
        <IconButton
          disabled={
            currentAudioIndex === songs.length - 1 || songs.length === 0
          }
          onClick={handlePlayNext}
          sx={{ color: "#687EFF" }}
        >
          <SkipNextIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default Player;

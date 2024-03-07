import React, { useRef, useState, useEffect } from "react";
import Multitrack from "wavesurfer-multitrack";
import { useSongs } from "../contexts/songsContext";
import { Box, Button, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export default function WaveformPlayerList({ multitrackRef }) {
  const [play, setPlay] = useState(0);
  const handlePlay = () => {
    if (multitrackRef.current) {
      setPlay((prev) => !prev);
      multitrackRef.current.isPlaying()
        ? multitrackRef.current.pause()
        : multitrackRef.current.play();
    }
  };
  const containerRef = useRef(null);
  const { songs } = useSongs();
  useEffect(() => {
    if (songs.length > 0) {
      multitrackRef.current = Multitrack.create(
        songs.map((song,index) => {
          return {
            id: index,
            draggable: true,
            startPosition: 0,
            volume: 1,
            options: {
              waveColor: "#687EFF",
              progressColor: "#f70531",
            },
            url: URL.createObjectURL(song),
          };
        }),
        {
          container: containerRef.current,
          minPxPerSec: 3,
          rightButtonDrag: false,
          cursorWidth: 2,
          cursorColor: "#FFF",
          trackBackground: "#1e1f1e",
          trackBorderColor: "#232423",
          dragBounds: true,
          envelopeOptions: {
            lineColor: "rgba(255, 0, 0, 0.7)",
            lineWidth: 2,
            dragPointSize: window.innerWidth < 600 ? 20 : 10,
            dragPointFill: "rgba(255, 255, 255, 0.8)",
            dragPointStroke: "#1e1f1e",
          },
        }
      );
      return () => {
        if (multitrackRef.current) {
          multitrackRef.current.destroy();
        }
      };
    }
  }, [containerRef, songs]);

  return (
    <div>
      <Box justifyContent="center" display="flex">
        <IconButton onClick={handlePlay} sx={{color:"#687EFF"}}>
          {play==0 ? (
            <PlayArrowIcon fontSize="large" />
          ) : (
            <PauseIcon fontSize="large" />
          )}
        </IconButton>
      </Box>

      <div
        id="player"
        ref={containerRef}
        style={{ background: "#2d2d2d", color: "#fff" }}
      />
    </div>
  );
}

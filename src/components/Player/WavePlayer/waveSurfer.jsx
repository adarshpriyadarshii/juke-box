import React, { useMemo,useRef, useCallback, useState,useEffect,forwardRef } from "react";
import { useWavesurfer } from "@wavesurfer/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useSongs } from "../../../contexts/songsContext";
import Timeline from 'wavesurfer.js/dist/plugins/timeline.esm.js'


function WaveformPlayer({ audioSrc}) {
  const waveformRef = useRef(null);

  //Function for Formatting the current playing time of our Track.
  const formatTime = (seconds) =>
    [seconds / 60, seconds % 60]
      .map((v) => `0${Math.floor(v)}`.slice(-2))
      .join(":");

  //Function for creating our WaveForm.
  const { wavesurfer, isPlaying, currentTime } = useWavesurfer({
    container: waveformRef,
    height: 25,
    width:"80vw",
    cursorColor: '#FFF',
    waveColor: "#687EFF",
    progressColor: "red",
    cursorWidth: 2,
    url: audioSrc,
    autoScroll:true,
    plugins: useMemo(() => [Timeline.create()], []),
  });

  //Function for triggering Play/Pause functionality on our Waveform.
  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  return (
    <>
      <Box ref={waveformRef} width="100%"></Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        justifyContent="space-between"
        margin="2%"
      >
        <Typography>Current time: {formatTime(currentTime)}</Typography>
        {/* <Button
          onClick={onPlayPause}
          sx={{
            border: "5px solid #80B3FF",
            backgroundColor: "#98E4FF",
            "&:hover": {
              border: "5px solid #80B3FF",
              backgroundColor: "#B6FFFA",
            },
          }}
        >
          {isPlaying ? "Pause" : "Play"}
        </Button> */}
      </Stack>
    </>
  );
}

export default WaveformPlayer;

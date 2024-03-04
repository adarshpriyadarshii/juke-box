import React, { useState, useEffect } from "react";
import Crunker from "crunker";
import { useSongs } from "../../../contexts/songsContext";
import { CircularProgress } from "@mui/material";
import WaveformPlayer from "./waveSurfer";

function WavePlayer() {
  const { songs } = useSongs();
  const audioFiles = songs;
  const [audioSrc, setAudioSrc] = useState("");
  const [loading, setLoading] = useState(false);


//Function for Concatenating songs of our Playlist using "Crunker" package.
  const concatAudio = async () => {
    const task = "concatAudio";
    if (audioFiles.length) {
      setLoading(true);//Handling loading phase.
      const crunker = new Crunker(44100);
      const buffers = await Promise.all(
        Array.from(audioFiles).map(async (file) =>
          crunker._context.decodeAudioData(await file.arrayBuffer())
        )
      );
      const result = await crunker[task](buffers);
      const output = await crunker.export(result, "audio/mp3");
      const audioUrl = URL.createObjectURL(output.blob);
      setAudioSrc(audioUrl);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (songs.length > 0) {
      concatAudio();
    } else {
      setAudioSrc("");
    }
  }, [songs]);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        audioSrc && (
          <>
            <WaveformPlayer audioSrc={audioSrc}/>
          </>
        )
      )}
    </div>
  );
}

export default WavePlayer;

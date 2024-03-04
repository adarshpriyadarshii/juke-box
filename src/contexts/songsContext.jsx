import React, { createContext, useContext, useState } from "react";

export const SongContext = createContext();

export function SongsContextProvider({ children }) {
  const [songs, setSongs] = useState([]);

  return (
    <SongContext.Provider value={{ songs, setSongs }}>
      {children}
    </SongContext.Provider>
  );
}

//Creating a Custom Hook for getting and updating our Playlist.
export const useSongs = () => useContext(SongContext);

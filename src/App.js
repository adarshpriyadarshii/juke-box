import "./App.css";
import React from "react";
import Home from "./pages/home";
import { SongsContextProvider } from "./contexts/songsContext";

function App() {
  return (
    <SongsContextProvider>
      <Home />
    </SongsContextProvider>
  );
}

export default App;

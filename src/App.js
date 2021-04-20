import "./App.css";
import { Home } from "./pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { History } from "./history/History";
import { VideoPage } from "./pages/VideoPage";
import { WatchLater } from "./watchlater/WatchLater";
import { LikedVideos } from "./likedvideos/LikeVideosPage";
import { PlayList } from "./playlist/PlayList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/videopage/:videoId" element={<VideoPage />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
        <Route path="/playlist" element={<PlayList />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Home } from "./pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { History } from "./pages/History";
import { VideoPage } from "./pages/VideoPage";
import { WatchLater } from "./pages/WatchLater";
import { LikedVideos } from "./pages/LikeVideosPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/videopage/:videoId" element={<VideoPage />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/likedvideos" element={<LikedVideos />} />
      </Routes>
    </div>
  );
}

export default App;

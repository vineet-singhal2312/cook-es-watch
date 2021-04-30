import "./App.css";
import { Home } from "./home/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { History } from "./history/History";
import { VideoPage } from "./videopage/VideoPage";
import { WatchLater } from "./watchlater/WatchLater";
import { LikedVideos } from "./likedvideos/LikeVideosPage";
import { PlayList } from "./playlist/PlayList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
        <Route path="/later" element={<WatchLater />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/playlist" element={<PlayList />} />
      </Routes>
    </div>
  );
}

export default App;

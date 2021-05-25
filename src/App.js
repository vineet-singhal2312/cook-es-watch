import "./App.css";
import { Home } from "./components/home/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { History } from "./components/history/History";
import { VideoPage } from "./components/videopage/VideoPage";
import { WatchLater } from "./components/watchlater/WatchLater";
import { LikedVideos } from "./components/likedvideos/LikeVideosPage";
import { PlayList } from "./components/playlist/PlayList";
import { SignIn } from "./pages/signin/SignIn";
import { LogIn } from "./pages/login/LogIn";

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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;

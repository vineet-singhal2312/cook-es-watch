import "./App.css";
import { Home } from "./pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { History } from "./History";
import { VideoPage } from "./pages/VideoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/videopage/:videoId" element={<VideoPage />} />
      </Routes>
    </div>
  );
}

export default App;

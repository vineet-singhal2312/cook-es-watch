import axios from "axios";
import { useEffect } from "react";
import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { PlaylistCard } from "./PlaylistCard";
import { usePlaylist } from "./PlayListContextProvier";
export const PlayList = () => {
  const { playlistState, playlistDispatch } = usePlaylist();
  // console.log(state);

  useEffect(() => {
    (async function () {
      try {
        // await axios.get("/playlists");
        const { data } = await axios.get("/playlists");
        console.log(data);

        playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <Header />
      <SideNav />

      <div className="playlist-videos-main">
        {playlistState.playlist.map((item) => (
          <PlaylistCard playlist={item} />
        ))}
      </div>
    </>
  );
};

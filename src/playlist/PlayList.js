import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { PlaylistCard } from "./PlaylistCard";
import { usePlaylist } from "./PlayListContextProvier";
export const PlayList = () => {
  const { playlistState } = usePlaylist();
  // console.log(state);

  return (
    <>
      <Header />
      <SideNav />

      <div className="playlist-videos-main">
        {playlistState.playlist.map((item) => (
          <PlaylistCard item={item} />
        ))}
      </div>
    </>
  );
};

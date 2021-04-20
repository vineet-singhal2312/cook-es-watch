import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { LikedVideosCard } from "../likedvideos/LikedVideosCard";
import { usePlaylist } from "./PlayListContextProvier";
import { PlaylistVideoCard } from "./PlaylistVideoCard";

export const PlaylistCard = ({ item }) => {
  return (
    <>
      {" "}
      <Link className="playlist-card link" to={`/videopage/${item.id}`}>
        <div className="playlist-name-div">
          <h1 className="playlist-name">{item.name}</h1>
        </div>
        <div className="playlist-videos">
          {item.videos.map((item) => (
            <PlaylistVideoCard item={item} />
          ))}
        </div>
      </Link>
    </>
  );
};

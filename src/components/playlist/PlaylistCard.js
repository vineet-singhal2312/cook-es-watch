import { Link } from "react-router-dom";
import { PlaylistVideoCard } from "./PlaylistVideoCard";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { usePlaylist } from "./PlayListContextProvier";

export const PlaylistCard = ({ playlist }) => {
  const { playlistDispatch } = usePlaylist();

  const deletePlayList = async (playlistId) => {
    const { data } = await axios.delete(
      "https://cook-es-watch.herokuapp.com/playlists",
      {
        data: { playlistId: playlistId },
      }
    );
    playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
  };

  return (
    <>
      {" "}
      {playlist.videos.length > 0 ? (
        <div className="playlist-card ">
          <div className="playlist-name-div">
            <h1 className="playlist-name">{playlist.name}</h1>
            <div
              className="playlis-delete-btn"
              onClick={() => deletePlayList(playlist._id)}
            >
              <MdDelete />
            </div>
          </div>
          <div className="playlist-videos">
            {playlist.videos.map((video) => (
              <PlaylistVideoCard
                key={video._id}
                video={video}
                playlistId={playlist._id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="playlist-card ">
          <div className="playlist-name-div">
            <h1 className="playlist-name">{playlist.name}</h1>{" "}
            <div
              className="playlis-delete-btn"
              onClick={() => deletePlayList(playlist._id)}
            >
              <MdDelete />
            </div>
          </div>
          <div className="empty-playlist-videos">
            <h1 className="empty-discription">This playlist is empty....</h1>
          </div>
        </div>
      )}
    </>
  );
};

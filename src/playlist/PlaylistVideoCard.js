import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { usePlaylist } from "./PlayListContextProvier";

export const PlaylistVideoCard = ({ video, playlistId }) => {
  const { playlistDispatch } = usePlaylist();
  const deleteVideoFromPlayList = async (playlistId, videoId) => {
    const { data } = await axios.delete(
      "https://cook-es-watch.herokuapp.com/playlists/videos",
      {
        data: { playlistId: playlistId, videoId: videoId },
      }
    );

    playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
  };
  return (
    <>
      {" "}
      <Link className="link playlist-videos-card" to={`/videos/${video._id}`}>
        <img src={video.img} className="playlist-card-img" alt="img" />

        <div className="playlist-videos-card-content">
          <p>{video.name}</p>
          <Link className="link playlist-videos-card-delete-btn" to="/playlist">
            <div onClick={() => deleteVideoFromPlayList(playlistId, video._id)}>
              <MdDelete />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};

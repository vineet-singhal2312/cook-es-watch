import { Link } from "react-router-dom";
import { PlaylistVideoCard } from "./PlaylistVideoCard";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { usePlaylist } from "./PlayListContextProvier";

export const PlaylistCard = ({ playlist }) => {
  // console.log(playlist);
  const { playlistDispatch } = usePlaylist();

  const deletePlayList = async (playlistId) => {
    console.log(playlistId);

    const { data } = await axios.delete("https://cook-es-watch.herokuapp.com/playlists", {
      data: { playlistId: playlistId },
    });
    playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
  };
  const deleteVideoFromPlayList = async (playlistId, videoId) => {
    // console.log(playlistId, videoId);

    const { data } = await axios.delete("https://cook-es-watch.herokuapp.com/playlists/videos", {
      data: { playlistId: playlistId, videoId: videoId },
    });

    // console.log(data);
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
              // <PlaylistVideoCard video={video} />

              <Link
                className="link playlist-videos-card"
                to={`/videopage/${video._id}`}
              >
                <img src={video.img} className="playlist-card-img" alt="img" />

                <div className="playlist-videos-card-content">
                  <p>{video.name}</p>
                  <Link
                    className="link playlist-videos-card-delete-btn"
                    to="/playlist"
                  >
                    <div
                      onClick={() =>
                        deleteVideoFromPlayList(playlist._id, video._id)
                      }
                    >
                      <MdDelete />
                    </div>
                  </Link>
                </div>
              </Link>
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

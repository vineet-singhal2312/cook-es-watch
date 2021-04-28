import axios from "axios";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { usePlaylist } from "../playlist/PlayListContextProvier";

export const PlayListModal = ({ item }) => {
  const { playlistDispatch, playlistState } = usePlaylist();
  const [userPlaylistName, setUserPlaylistName] = useState("");
  // console.log(item);

  const takePlayListName = (e) => {
    e.preventDefault();
    const playlistNameGivenByUser = e.target.value;

    setUserPlaylistName(playlistNameGivenByUser);
  };

  const addPlayList = async () => {
    const { data } = await axios.post("/playlists", { name: userPlaylistName });
    // console.log(data);

    playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
  };

  const addVideoInPlayList = async (playlist) => {
    // if (playlist.videos.length == 0) {
    const { data } = await axios.post("/playlists/videos", {
      playlistId: playlist._id,
      videoId: item._id,
    });
    console.log(data);
    // playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
    // }

    // if (playlist.videos.length > 0) {
    //   if (playlist.videos((video) => video.id !== item._id)) {
    //   }
    // }

    // playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
  };

  // console.log(userPlaylistName);
  return (
    <div className="playlist-modal">
      <div className="playlist-modal-title">
        <h3>ADD PLAYLIST</h3>
        <div>
          <IoClose
            color="white"
            onClick={() =>
              playlistDispatch({
                type: "CLOSE_MODAL",
              })
            }
          />
        </div>{" "}
      </div>
      <div className="playlist-modal-list">
        <ul className="playlist-modal-list-list">
          {playlistState.playlist.map((playlist) => (
            <li
              className="playlist-modal-list-item"
              onClick={() => {
                console.log(playlist);
                // playlistDispatch({
                //   type: "ADD_TO_PLAY_LIST",
                //   playlistName: playlist.name,
                //   payload: item,
                // });

                addVideoInPlayList(playlist);
              }}
            >
              {" "}
              {playlist.name}
            </li>
          ))}
        </ul>
      </div>
      <form className="playlist-modal-input-div">
        <input
          type="text"
          className="playlist-modal-input"
          placeholder="add playlist.."
          onChange={takePlayListName}
        />
        <button
          className="playlist-modal-input-button"
          // onClick={(e) => {
          //   e.preventDefault();
          //   playlistDispatch({
          //     type: "ADD_PLAYLIST",
          //     payload: userPlaylistName,
          //   });
          // }}

          onClick={(e) => {
            e.preventDefault();
            addPlayList();
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

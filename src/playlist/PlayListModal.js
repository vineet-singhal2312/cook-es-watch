import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { usePlaylist } from "./PlayListContextProvier";

export const PlayListModal = ({ item }) => {
  const { playlistDispatch, playlistState } = usePlaylist();
  const [userPlaylistName, setUserPlaylistName] = useState("");
  // console.log(item);

  const takePlayListName = (e) => {
    e.preventDefault();
    const playlistNameGivenByUser = e.target.value;

    setUserPlaylistName(playlistNameGivenByUser);
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
          {playlistState.playlist.map((video) => (
            <li
              className="playlist-modal-list-item"
              onClick={() => {
                console.log(video);
                playlistDispatch({
                  type: "ADD_TO_PLAY_LIST",
                  playlistName: video.name,
                  payload: item,
                });
              }}
            >
              {" "}
              {video.name}
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
          onClick={(e) => {
            e.preventDefault();
            playlistDispatch({
              type: "ADD_PLAYLIST",
              payload: userPlaylistName,
            });
          }}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

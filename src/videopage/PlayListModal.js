import axios from "axios";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { usePlaylist } from "../playlist/PlayListContextProvier";

export const PlayListModal = ({ item }) => {
  const {
    playlistDispatch,
    playlistState,
    setIsPlayListVideoAddModel,
  } = usePlaylist();
  const [userPlaylistName, setUserPlaylistName] = useState("");
  // console.log(item);

  useEffect(() => {
    (async function () {
      try {
       
        const { data } = await axios.get("/playlists");
        console.log(data);

        playlistDispatch({ type: "ADD_PLAYLIST", payload: data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
    setIsPlayListVideoAddModel(true);

    try {
      const { data } = await axios.post("/playlists/videos", {
        playlistId: playlist._id,
        videoId: item._id,
      });
      console.log(data);

      playlistDispatch({ type: "ADD_PLAYLIST", payload: data });

      setTimeout(() => {
        setIsPlayListVideoAddModel(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="playlist-modal">
      <div className="playlist-modal-title">
        <h3>ADD PLAYLIST</h3>
        <div  className="close-model">
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

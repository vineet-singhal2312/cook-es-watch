import axios from "axios";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../../providers/AuthProvider";
import { ApiService } from "../../utils/ApiServices";
import { usePlaylist } from "../../providers/PlayListContextProvier";

export const PlayListModal = ({ item }) => {
  const { playlistDispatch, playlistState, setIsPlayListVideoAddModel } =
    usePlaylist();
  const [userPlaylistName, setUserPlaylistName] = useState("");
  const { token } = useAuth();
  useEffect(() => {
    (async function () {
      try {
        // const { data } = await axios.get(
        //   "https://cook-es-watch.herokuapp.com/playlists"
        // );

        const data = await ApiService(
          "get",
          { headers: { authorization: token } },

          "playlists"
        );

        console.log(data);
        playlistDispatch({
          type: "ADD_PLAYLIST",
          payload: data.result,
        });

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [playlistDispatch]);

  const takePlayListName = (e) => {
    e.preventDefault();
    const playlistNameGivenByUser = e.target.value;

    setUserPlaylistName(playlistNameGivenByUser);
  };

  const addPlayList = async () => {
    try {
      const data = await ApiService(
        "post",
        {
          playlistName: userPlaylistName,
        },
        "playlists",
        { headers: { authorization: token } }
      );

      console.log(data);
      playlistDispatch({
        type: "ADD_PLAYLIST",
        payload: data.result,
      });
      setUserPlaylistName("");
    } catch (error) {
      console.log(error, "axios error");
    }
  };

  const addVideoInPlayList = async (playlist) => {
    setIsPlayListVideoAddModel(true);

    try {
      ApiService(
        "post",
        {
          playlistId: playlist._id,
          videoId: item._id,
        },
        "playlists/videos",
        { headers: { authorization: token } }
      );

      setTimeout(() => {
        setIsPlayListVideoAddModel(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(playlistState);

  return (
    <div className="playlist-modal">
      <div className="playlist-modal-title">
        <h3>ADD PLAYLIST</h3>
        <div className="close-model">
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
          {playlistState.playlist?.map((playlist) => (
            <li
              className="playlist-modal-list-item"
              onClick={() => {
                console.log(playlist);

                addVideoInPlayList(playlist);
                playlistDispatch({
                  type: "CLOSE_MODAL",
                });
              }}
            >
              {" "}
              {playlist.playlistName}
            </li>
          ))}
        </ul>
      </div>
      <form className="playlist-modal-input-div">
        <input
          type="text"
          value={userPlaylistName}
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

import ReactPlayer from "react-player";
import { useReduce } from "../../providers/useReducerProvider";

import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { usePlaylist } from "../playlist/PlayListContextProvier";
import axios from "axios";
import { useParams } from "react-router";

export const VideoCard = ({ item }) => {
  console.log(item);
  const { videoId } = useParams();

  const { playlistDispatch } = usePlaylist();

  const { dispatch } = useReduce();

  const likeVideo = async (videoId) => {
    await axios.post("https://cook-es-watch.herokuapp.com/likedvideos", {
      Id: videoId,
    });

    const res = await axios.get(
      `https://cook-es-watch.herokuapp.com/videos/${videoId}`
    );
    dispatch({
      type: "INITIALIZE_PRODUCT",
      payload: res.data,
    });
  };

  const postInWatchLater = async (_id) => {
    await axios.post("https://cook-es-watch.herokuapp.com/watchlatervideos", {
      Id: _id,
    });

    const res = await axios.get(
      `https://cook-es-watch.herokuapp.com/videos/${videoId}`
    );

    dispatch({
      type: "INITIALIZE_PRODUCT",
      payload: res.data,
    });
  };
  const postDislike = async (videoId) => {
    const res = await axios.post(
      "https://cook-es-watch.herokuapp.com/dislikedvideos",
      { Id: videoId }
    );

    dispatch({
      type: "INITIALIZE_PRODUCT",
      payload: res.data,
    });
  };

  const deleteDislike = async (videoId) => {
    const res = await axios.delete(
      "https://cook-es-watch.herokuapp.com/dislikedvideos",
      {
        data: { Id: videoId },
      }
    );

    dispatch({
      type: "INITIALIZE_PRODUCT",
      payload: res.data,
    });
  };
  return (
    <>
      <div className="video-card">
        <div className="video-page-videoplayer">
          <ReactPlayer url={item.url} width="100%" height="100%" />
        </div>
        <div className="video-card-video-content-div">
          <div className="video-card-name-div">
            <h2 className="video-name-in-player">{item.name}</h2>
            <p className="video-views-in-player">
              {item.views} | {item.date}
            </p>
          </div>
          <div className="like-dislike-btn-div">
            {item.isLike ? (
              <div className="link video-player-option clicked">
                {" "}
                <FaThumbsUp className="video-player-icon " />
                <p className="video-option-name">{item.like}</p>
              </div>
            ) : (
              <div
                className="link video-player-option "
                onClick={() => likeVideo(item._id)}
              >
                {" "}
                <FaThumbsUp className="video-player-icon" />
                <p className="video-option-name">{item.like}</p>
              </div>
            )}

            {item.isDislike ? (
              <div
                className="link video-player-option clicked"
                onClick={() => deleteDislike(item._id)}
              >
                {" "}
                <FaThumbsDown className="video-player-icon" />
                <p className="video-option-name">{item.dislike}</p>
              </div>
            ) : (
              <div
                className="link video-player-option "
                onClick={() => postDislike(item._id)}
              >
                {" "}
                <FaThumbsDown className="video-player-icon" />
                <p className="video-option-name">{item.dislike}</p>
              </div>
            )}

            {item.watchlater ? (
              <div
                className="link video-player-option clicked"
                onClick={() =>
                  dispatch({
                    type: "DELETE_FROM_WATCHLATER",
                    payload: item,
                  })
                }
              >
                {" "}
                <MdWatchLater className="video-player-icon" />
                <p className="video-option-name"> Later</p>
              </div>
            ) : (
              <div
                className="link video-player-option "
                onClick={() => postInWatchLater(item._id)}
              >
                {" "}
                <MdWatchLater className="video-player-icon" />
                <p className="video-option-name"> Later</p>
              </div>
            )}
            <div
              onClick={() =>
                playlistDispatch({
                  type: "SHOE_MODAL",
                })
              }
              className="video-player-option"
            >
              {" "}
              <RiPlayList2Line className="video-player-icon" />
              <p className="video-option-name">Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

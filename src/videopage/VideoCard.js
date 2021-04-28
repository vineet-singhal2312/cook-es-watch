import ReactPlayer from "react-player";
// import { FaThumbsDown } from "react-icons/fa";
import { useReduce } from "../providers/useReducerProvider";
// import { Link } from "react-router-dom";

import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { usePlaylist } from "../playlist/PlayListContextProvier";
import axios from "axios";
import { useParams } from "react-router";
// import { LikedVideos } from "../likedvideos/LikeVideosPage";

export const VideoCard = ({ item }) => {
  console.log(item);
  const { videoId } = useParams();

  const { playlistDispatch } = usePlaylist();

  const { dispatch } = useReduce();

  // const item = state.product;

  const likeVideo = async (videoId) => {
    await axios.post("/likedvideos", { Id: videoId });

    // dispatch({ type: "SET_LIKEDVIDEOS", payload: data });

    const res = await axios.get(`/videos/${videoId}`);
    console.log(res);
    dispatch({
      type: "INITIALIZE_PRODUCT",
      // payload1: res1.data,
      payload: res.data,
    });
  };

  const postInWatchLater = async (_id) => {
    await axios.post("/watchlatervideos", {
      Id: _id,
    });
    // dispatch({ type: "SET_WATCHLATERVIDEOS", payload: data });

    const res = await axios.get(`/videos/${videoId}`);
    console.log(res);
    dispatch({
      type: "INITIALIZE_PRODUCT",
      // payload1: res1.data,
      payload: res.data,
    });
  };

  // const unLikeVideoFromVideo = async (videoId) => {
  //   const { data } = await axios.delete("/likedvideos", { Id: videoId });
  //   console.log(data);
  //   setInitialData(data);

  // };
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
              <div
                className="link video-player-option clicked"
                // onClick={() =>
                //   dispatch({
                //     type: "UNLIKE",
                //     payload: item,
                //   })
                // }
                // onClick={() => unLikeVideoFromVideo(item._id)}
              >
                {" "}
                <FaThumbsUp className="video-player-icon" />
                <p>{item.like}</p>
              </div>
            ) : (
              <div
                className="link video-player-option "
                // onClick={() =>
                //   dispatch({
                //     type: "LIKE",
                //     payload: item,
                //   })
                // }

                onClick={() => likeVideo(item._id)}
              >
                {" "}
                <FaThumbsUp className="video-player-icon" />
                <p>{item.like}</p>
              </div>
            )}

            {item.isDisLike ? (
              <div
                className="link video-player-option clicked"
                onClick={() =>
                  dispatch({
                    type: "UNDISLIKE",
                    payload: item,
                  })
                }
              >
                {" "}
                <FaThumbsDown className="video-player-icon" />
                <p>{item.dislike}</p>
              </div>
            ) : (
              <div
                className="link video-player-option "
                onClick={() =>
                  dispatch({
                    type: "DISLIKE",
                    payload: item,
                  })
                }
              >
                {" "}
                <FaThumbsDown className="video-player-icon" />
                <p>{item.dislike}</p>
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
                <p> Later</p>
              </div>
            ) : (
              <div
                className="link video-player-option "
                // onClick={() =>
                //   dispatch({
                //     type: "ADD_TO_WATCHLATER",
                //     payload: item,
                //   })
                // }
                onClick={() => postInWatchLater(item._id)}
              >
                {" "}
                <MdWatchLater className="video-player-icon" />
                <p> Later</p>
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
              <p>Playlist</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

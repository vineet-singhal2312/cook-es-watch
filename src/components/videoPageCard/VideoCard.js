import ReactPlayer from "react-player";
import { useReduce } from "../../providers/useReducerProvider";

import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { usePlaylist } from "../../pages/playlist/PlayListContextProvier";
import axios from "axios";
// import { useParams } from "react-router";
import { useAuth } from "../../providers/AuthProvider";
import { useState, useEffect } from "react";
import { postVideo, deleteVideo } from "./videCardController";
import { ApiService } from "../../utils/ApiServices";

export const VideoCard = ({ item }) => {
  const [likedVideosList, setLikedVideosList] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [dislikedVideosList, setDislikedVideosList] = useState([]);

  // const { videoId } = useParams();
  const { token } = useAuth();

  const { playlistDispatch } = usePlaylist();

  const { dispatch } = useReduce();
  console.log(watchLaterList);
  useEffect(async () => {
    const data = await ApiService(
      "get",
      { headers: { authorization: token } },
      "likedvideos"
    );

    console.log(data.result[0]?.videos.map((item) => item._id));
    setLikedVideosList(data.result[0]?.videos.map((item) => item._id));
  }, []);

  useEffect(async () => {
    const data = await ApiService(
      "get",
      { headers: { authorization: token } },
      "watchlatervideos"
    );

    console.log(data.result[0]?.videos.map((item) => item._id));
    setWatchLaterList(data.result[0]?.videos.map((item) => item._id));
  }, []);

  useEffect(async () => {
    const data = await ApiService(
      "get",
      { headers: { authorization: token } },
      "dislikedvideos"
    );

    console.log(data.result[0]?.videos.map((item) => item._id));
    setDislikedVideosList(data.result[0]?.videos.map((item) => item._id));
  }, []);

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
            {likedVideosList?.includes(item._id) ? (
              <div
                className="link video-player-option clicked"
                onClick={() =>
                  deleteVideo(
                    item._id,
                    setLikedVideosList,
                    token,
                    "likedvideos"
                  )
                }
              >
                {" "}
                <FaThumbsUp className="video-player-icon " />
                <p className="video-option-name">{item.like}</p>
              </div>
            ) : (
              <div
                className="link video-player-option "
                onClick={() =>
                  postVideo(item._id, setLikedVideosList, token, "likedvideos")
                }
              >
                {" "}
                <FaThumbsUp className="video-player-icon" />
                <p className="video-option-name">{item.like}</p>
              </div>
            )}

            {dislikedVideosList?.includes(item._id) ? (
              <div
                className="link video-player-option clicked"
                onClick={() =>
                  deleteVideo(
                    item._id,
                    setDislikedVideosList,
                    token,
                    "dislikedvideos"
                  )
                }
              >
                {" "}
                <FaThumbsDown className="video-player-icon" />
                <p className="video-option-name">{item.dislike}</p>
              </div>
            ) : (
              <div
                className="link video-player-option "
                onClick={() =>
                  postVideo(
                    item._id,
                    setDislikedVideosList,
                    token,
                    "dislikedvideos"
                  )
                }
              >
                {" "}
                <FaThumbsDown className="video-player-icon" />
                <p className="video-option-name">{item.dislike}</p>
              </div>
            )}

            {watchLaterList?.includes(item._id) ? (
              <div
                className="link video-player-option clicked"
                onClick={() =>
                  deleteVideo(
                    item._id,
                    setWatchLaterList,
                    token,
                    "watchlatervideos"
                  )
                }
              >
                {" "}
                <MdWatchLater className="video-player-icon" />
                <p className="video-option-name"> Later</p>
              </div>
            ) : (
              <div
                className="link video-player-option "
                onClick={() =>
                  postVideo(
                    item._id,
                    setWatchLaterList,
                    token,
                    "watchlatervideos"
                  )
                }
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

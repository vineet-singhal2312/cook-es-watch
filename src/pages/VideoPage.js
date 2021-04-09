import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useParams } from "react-router-dom";
// import { Data } from "../data/Data";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { useReduce } from "../providers/useReducerProvider";

export const VideoPage = () => {
  const { dispatch, state } = useReduce();
  const { videoId } = useParams();
  function getVideoDetails(DataArr, videoId) {
    return DataArr.find((item) => item.id === videoId);
  }

  const videoDetails = getVideoDetails(state.Data, videoId);
  return (
    <>
      <SideNav />
      <Header />
      <div className="video-page-background">
        <div className="Vedio-page-content">
          <div className="video-card">
            <div className="video-page-videoplayer">
              <ReactPlayer url={videoDetails.url} width="100%" height="100%" />
            </div>
            <div className="video-card-video-content-div">
              <div className="video-card-name-div">
                <h2 className="video-name-in-player">{videoDetails.name}</h2>
                <p className="video-views-in-player">
                  {videoDetails.views} | {videoDetails.date}
                </p>
              </div>
              <div className="like-dislike-btn-div">
                {videoDetails.isLike ? (
                  <div
                    className="link video-player-option clicked"
                    onClick={() =>
                      dispatch({
                        type: "UNLIKE",
                        payload: videoDetails,
                      })
                    }
                  >
                    {" "}
                    <FaThumbsUp className="video-player-icon" />
                    <p>{videoDetails.like}</p>
                  </div>
                ) : (
                  <div
                    className="link video-player-option "
                    onClick={() =>
                      dispatch({
                        type: "LIKE",
                        payload: videoDetails,
                      })
                    }
                  >
                    {" "}
                    <FaThumbsUp className="video-player-icon" />
                    <p>{videoDetails.like}</p>
                  </div>
                )}

                {videoDetails.isDisLike ? (
                  <div
                    className="link video-player-option clicked"
                    onClick={() =>
                      dispatch({
                        type: "UNDISLIKE",
                        payload: videoDetails,
                      })
                    }
                  >
                    {" "}
                    <FaThumbsDown className="video-player-icon" />
                    <p>{videoDetails.dislike}</p>
                  </div>
                ) : (
                  <div
                    className="link video-player-option "
                    onClick={() =>
                      dispatch({
                        type: "DISLIKE",
                        payload: videoDetails,
                      })
                    }
                  >
                    {" "}
                    <FaThumbsDown className="video-player-icon" />
                    <p>{videoDetails.dislike}</p>
                  </div>
                )}

                {videoDetails.watchlater ? (
                  <div
                    className="link video-player-option clicked"
                    onClick={() =>
                      dispatch({
                        type: "DELETE_FROM_WATCHLATER",
                        payload: videoDetails,
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
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_WATCHLATER",
                        payload: videoDetails,
                      })
                    }
                  >
                    {" "}
                    <MdWatchLater className="video-player-icon" />
                    <p> Later</p>
                  </div>
                )}
                <Link to="/" className="link video-player-option">
                  {" "}
                  <RiPlayList2Line className="video-player-icon" />
                  <p>Playlist</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="comment-card"></div>
        </div>
      </div>
    </>
  );
};

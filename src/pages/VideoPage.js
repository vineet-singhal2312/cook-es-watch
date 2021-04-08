import { Header } from "../components/Header";
import { SideNav } from "../components/SideNav";
import { useParams } from "react-router-dom";
import { Data } from "../data/Data";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { RiPlayList2Line } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export const VideoPage = () => {
  const { videoId } = useParams();

  function getVideoDetails(DataArr, videoId) {
    return DataArr.find((item) => item.id === videoId);
  }

  const videoDetails = getVideoDetails(Data, videoId);
  return (
    <>
      <SideNav />
      <Header />
      <div className="video-page-background">
        <div className="Vedio-page-content">
          <div className="video-card">
            <ReactPlayer url={videoDetails.url} width="100%" height="85%" />
            <div className="video-card-video-content-div">
              <div className="video-card-name-div">
                <h2 className="video-name-in-player">{videoDetails.name}</h2>
                <p className="video-views-in-player">
                  {videoDetails.views} | {videoDetails.date}
                </p>
              </div>
              <div className="like-dislike-btn-div">
                <Link to="/" className="link video-player-option">
                  {" "}
                  <FaThumbsUp className="video-player-icon" />
                  <p>{videoDetails.like}</p>
                </Link>
                <Link to="/" className="link video-player-option">
                  <FaThumbsDown className="video-player-icon" />
                  <p>{videoDetails.dislike}</p>
                </Link>
                <Link to="/" className="link video-player-option">
                  {" "}
                  <MdWatchLater className="video-player-icon" />
                  <p> Later</p>
                </Link>
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

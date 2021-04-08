import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";

export const VideoListCard = ({ item }) => {
  return (
    <>
      <Link className="link" to={`/videopage/${item.id}`}>
        <div className="product-list-card">
          <ReactPlayer
            className="video-list-videoplayer"
            width="90%"
            height="55%"
            url={item.url}
          />
          <div className="product-list-card-content">
            <h4 className="product-list-card-name">{item.name}</h4>
            <div className="product-list-card-views-div">
              <p>{item.views}</p>
              <p>{item.date}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

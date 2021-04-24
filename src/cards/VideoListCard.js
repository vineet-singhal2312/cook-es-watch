import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { useReduce } from "../providers/useReducerProvider";

export const VideoListCard = ({ item }) => {
  const { dispatch, state } = useReduce();
  // console.log(state);

  return (
    <>
      <Link className="link" to={`/videopage/${item.id}`}>
        <div
          className="product-list-card"
          onClick={() => dispatch({ type: "ADD_TO_HISTORY", payload: item })}
        >
          <img src={item.img} className="video-list-videoplayer" />
          {/* <ReactPlayer
            className="video-list-videoplayer"
            width="90%"
            height="55%"
            url={item.url}
          /> */}
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

import ReactPlayer from "react-player";
import { FaThumbsDown } from "react-icons/fa";
import { useReduce } from "../providers/useReducerProvider";
import { Link } from "react-router-dom";

export const LikedVideosCard = ({ item}) => {
  const { dispatch } = useReduce();
  return (
    <>
      {" "}
      <Link className="link like-videos-card" to={`/videopage/${item.id}`}>
        <ReactPlayer url={item.url} width="40%" height="80%" />
        <div className="history-card-content">
          <div className="liked-videos-card-name">{item.name}</div>
          <Link className="link history-card-delete-btn" to="/likedvideos">
            <div
              onClick={() =>
                dispatch({
                  type: "UNLIKED",
                  payload: item,
            
                })
              }
            >
              <FaThumbsDown />
            </div>
          </Link>
        </div>
      </Link>
    </>
  );
};

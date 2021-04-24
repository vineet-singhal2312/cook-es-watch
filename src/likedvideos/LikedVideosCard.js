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
        {/* <ReactPlayer url={item.url} width="90%" height="55%" /> */}
        <img src={item.img} className="like-videos-card-img" />

        <div className="like-videos-card-content">
          {item.name}
          <Link className="link like-videos-card-delete-btn" to="/likedvideos">
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
